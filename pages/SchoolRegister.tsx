import React, { MouseEventHandler, useState } from "react";
import Input from "@/components/SignUp-Login/input";
import TextArea from "@/components/SignUp-Login/TextArea";
import Radio from "@/components/SignUp-Login/radio";
import { RadioButton } from "@/interfaces/radioButton";
import Form from "@/components/SignUp-Login/form";
import { useRouter } from "next/router";
import Navbar from "@/components/SignUp-Login/navbar";
import SelectLocation from "@/components/SignUp-Login/SelectLocation";
import { useCookies } from "react-cookie";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { NextApiRequest, NextApiResponse } from "next";
import { HandleGetUser } from "@/requestHandlers/HandleGetUser";
import { UserType } from "@/interfaces/UserType.enum";
const Cookies = require("cookies");
const SchoolRegister = () => {
  let MAX_BIO_SIZE = 512;

  // Signup for schools
  const [schoolName, setSchoolName] = useState("");
  const [isHiring, setIsHiring] = useState(false);
  const [bio, setBio] = useState("");
  const [street, setStreet] = useState("");
  const [cityId, setCityName] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  const address = [
    {
      name: "Country",
      value: country,
      onChange: (e: any) => setCountry(e.target.value),
    },
    {
      name: "Province",
      value: province,
      onChange: (e: any) => {
        console.log(e.target.value);
        setProvince(e.target.value);
      },
    },
    {
      name: "City",
      value: cityId,
      onChange: (e: any) => setCityName(e.target.value),
    },
  ];
  const hiringOpts: Array<RadioButton> = [
    {
      name: "Yes",
      label: "Yes",
      value: "Yes",
      onChange: (e: any) => setIsHiring(true),
    },
    {
      name: "No",
      label: "No",
      value: "No",
      onChange: (e: any) => setIsHiring(false),
    },
  ];

  // error message
  let [message, setErrorMessage] = useState("");
  const router = useRouter();
  const [cookie, setUserToken] = useCookies(["token"]);
  const schoolRegisterHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    const jwt = require("jsonwebtoken");
    const user = jwt.decode(cookie.token);
    const handlerFactory = new HandlerFactory("school-register");
    const schoolRegisterHandler = handlerFactory.createHandler({
      schoolName,
      bio,
      isHiring,
      cityId,
      street,
      userId: user.id,
      lng: 0,
      lat: 0,
    });
    // @ts-ignore
    schoolRegisterHandler.execute({
      setErrorMessage: setErrorMessage,
      router: router,
    });
  };
  return (
    <div>
      <Navbar />
      <Form
        CreateSchool
        errorMessage={message}
        onSubmit={schoolRegisterHandler}
        submitMessage={"Create School"}
      >
        <>
          <Input
            type="text"
            value={schoolName}
            label={"School Name"}
            onChange={(e: any) => setSchoolName(e.target.value)}
          />

          <SelectLocation inputs={address} />
          <Input
            type="text"
            label="Street"
            value={street}
            onChange={(e: any) => setStreet(e.target.value)}
          />

          <TextArea
            name={"School Bio"}
            value={bio}
            onChange={(e: any) => setBio(e.target.value)}
            MAX_SIZE={MAX_BIO_SIZE}
          >
            <>
              School Bio <span className="text-[14px]">(optional)</span>
            </>
          </TextArea>
          <Radio
            label={"Are you hiring?"}
            name="hiring"
            value={isHiring ? "Yes" : "No"}
            options={hiringOpts}
          />
        </>
      </Form>
    </div>
  );
};

export default SchoolRegister;

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const cookie = new Cookies(req, res);
  const token = cookie.get("token");

  // Check if user already logged in
  if (token === "" || !token)
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };

  // Check validity of token
  const handlerFactory = new HandlerFactory("get-user");
  const getUserHandler = handlerFactory.createHandler({
    token: token,
  }) as HandleGetUser;

  const resp = await getUserHandler.execute();
  if (resp.success)
    if (resp.user.type === UserType.SCHOOL_OWNER)
      return {
        props: {},
      };
    else
      return {
        redirect: {
          permanent: false,
          destination: "/home",
        },
      };

  cookie.set("token", "");

  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
  };
}
