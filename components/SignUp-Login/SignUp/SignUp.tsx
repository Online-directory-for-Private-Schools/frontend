import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useState } from "react";
import Navbar from "../navbar";
import Form from "../form";
import InputGrp from "../InputGrp";
import Input from "../input";
import Radio from "../radio";
import { InputInterface } from "@/interfaces/Input";
import { categoryOptions } from "./categoryOptions";
import Select from "../Select";
import TextArea from "../TextArea";
import { RadioButton } from "@/interfaces/radioButton";

function SignUp() {
  let MAX_BIO_SIZE = 255;

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdConfirm, setPasswdConfirm] = useState("");
  const [matching, setMatching] = useState(true);

  const [category, setCategory] = useState("student");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [street, setStreet] = useState("");
  const [cityName, setCityName] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  // Signup for schools
  const [schoolName, setSchoolName] = useState("");
  const [isHiring, setIsHiring] = useState(false);
  const [bio, setBio] = useState("");

  const countries = ["Algeria"];
  const provinces = ["Algiers"];
  const cities = [
    "Mahelma",
    "Sidi Abdelah",
    "Zeralda",
    "Bordj El Bahri",
    "Ain Taya",
  ];

  // error message
  let [message, setErrorMessage] = useState("");

  const router = useRouter();
  const signUpHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    const body = {
      name: firstname + " " + lastname,
      email: email,
      phone_number: phoneNumber,
      password: passwd,
      type: category,
      // country: country,
      // province: province,
      // cityName: cityName
    };

    apiPostRequestHandler("/auth/register", body, setErrorMessage, true).then(
      (success: boolean) => {
        if (success) router.push("/");
      }
    );
  };

  categoryOptions.map(
    (option) =>
      (option.onChange = (event: any) => setCategory(event.target.value))
  );

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
  const nameInputs: Array<InputInterface> = [
    {
      type: "text",
      label: "First Name",
      value: firstname,
      onChange: (e: any) => setFirstname(e.target.value),
    },
    {
      type: "text",
      label: "Last Name",
      value: lastname,
      onChange: (e: any) => setLastName(e.target.value),
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

  console.log(isHiring);
  return (
    <div>
      <Form errorMessage={message} onSubmit={signUpHandler}>
        <>
          <InputGrp input inputs={nameInputs} />
          <Input
            type="email"
            label={"Email"}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            label={"Password"}
            value={passwd}
            onChange={(e: any) => setPasswd(e.target.value)}
            onBlur={() => {
              if (passwdConfirm !== passwd) setMatching(false);
              else setMatching(true);
            }}
          />

          <Input
            type="password"
            label={"Confirm Password"}
            value={passwdConfirm}
            onChange={(e: any) => {
              setPasswdConfirm(e.target.value);
            }}
            onBlur={() => {
              if (passwdConfirm !== passwd) setMatching(false);
              else setMatching(true);
            }}
          />

          {!matching && (
            <div className={"text-right text-red-600 p-0"}>
              Unmatching Password
            </div>
          )}

          <Input
            type="text"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e: any) => {
              if (
                !isNaN(e.target.value) &&
                e.target.value[e.target.value.length - 1] !== " "
              )
                setPhoneNumber(e.target.value);
            }}
          />

          <Radio
            label="Are you?"
            value={category}
            name={"cat"}
            options={categoryOptions}
          />

          {category === categoryOptions[0].value && (
            <>
              <InputGrp select inputs={locationRow1} />
              <Select
                name="City"
                value={cityName}
                options={cities}
                onChange={(e: any) => setCityName(e.target.value)}
              />
            </>
          )}
          {category === categoryOptions[1].value && (
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
          )}
        </>
      </Form>
    </div>
  );
}

export default SignUp;
