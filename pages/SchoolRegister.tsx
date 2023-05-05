import React, { MouseEventHandler, useState } from "react";
import { categoryOptions } from "@/components/SignUp-Login/SignUp/categoryOptions";
import Input from "@/components/SignUp-Login/input";
import InputGrp from "@/components/SignUp-Login/InputGrp";
import Select from "@/components/SignUp-Login/Select";
import TextArea from "@/components/SignUp-Login/TextArea";
import Radio from "@/components/SignUp-Login/radio";
import { RadioButton } from "@/interfaces/radioButton";
import Form from "@/components/SignUp-Login/form";
import { handleSchoolRegister } from "@/requestHandlers/SchoolRegisterHandler";
import { cookies } from "next/headers";
import { useRouter } from "next/router";
import { useCookie } from "next-cookie";
const SchoolRegister = () => {
  let MAX_BIO_SIZE = 512;

  // Signup for schools
  const [schoolName, setSchoolName] = useState("");
  const [isHiring, setIsHiring] = useState(false);
  const [bio, setBio] = useState("");
  const [street, setStreet] = useState("");
  const [cityName, setCityName] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  const countries = ["Algeria"];
  const provinces = ["Algiers"];
  const cities = [
    "Mahelma",
    "Sidi Abdelah",
    "Zeralda",
    "Bordj El Bahri",
    "Ain Taya",
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

  const locationRow1 = [
    {
      name: "Country",
      value: country,
      onChange: (e: any) => setCountry(e.target.value),
      options: countries,
    },
    {
      name: "Province",
      value: province,
      onChange: (e: any) => setProvince(e.target.value),
      options: provinces,
    },
  ];

  // error message
  let [message, setErrorMessage] = useState("");
  const userToken = useCookie("TOKEN");
  console.log(userToken);
  const router = useRouter();
  const schoolRegisterHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    const jwt = require("jsonwebtoken");
    const user = jwt.decode(userToken);
    handleSchoolRegister(
      schoolName,
      bio,
      isHiring,
      country,
      province,
      cityName,
      street,
      user.id,
      setErrorMessage,
      router
    );
  };
  return (
    <div>
      <Form errorMessage={message} onSubmit={schoolRegisterHandler}>
        <>
          <Input
            type="text"
            value={schoolName}
            label={"School Name"}
            onChange={(e: any) => setSchoolName(e.target.value)}
          />
          <InputGrp select inputs={locationRow1} />
          <div className="flex flex-row gap-5">
            <Select
              name="City"
              value={cityName}
              options={cities}
              onChange={(e: any) => setCityName(e.target.value)}
            />
            <Input
              type="text"
              label="Street"
              value={street}
              onChange={(e: any) => setStreet(e.target.value)}
            />
          </div>

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
