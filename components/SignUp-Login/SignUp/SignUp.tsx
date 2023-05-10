import { useRouter } from "next/router";
import React, { MouseEventHandler, useState } from "react";
import Form from "../form";
import InputGrp from "../InputGrp";
import Input from "../input";
import Radio from "../radio";
import { InputInterface } from "@/interfaces/Input";
import { categoryOptions } from "./categoryOptions";
import Select from "../Select";
import { handleSignUp } from "@/requestHandlers/handleSignUp";
import SelectLocation from "@/components/SignUp-Login/SelectLocation";

function SignUp() {
  // Shared Info between School and Educator
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdConfirm, setPasswdConfirm] = useState("");
  const [matching, setMatching] = useState(true);
  const [category, setCategory] = useState("student");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCityName] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  // error message
  let [message, setErrorMessage] = useState("");

  const router = useRouter();
  const signUpHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    // handleSignUp(
    //   firstname,
    //   lastname,
    //   email,
    //   phoneNumber,
    //   passwd,
    //   category,
    //   city,
    //   setErrorMessage,
    //   router
    // );
  };

  categoryOptions.map(
    (option) =>
      (option.onChange = (event: any) => setCategory(event.target.value))
  );

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
      value: city,
      onChange: (e: any) => setCityName(e.target.value),
    },
  ];
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

          {/*<InputGrp select inputs={locationRow1} />*/}
          <SelectLocation inputs={address} />
        </>
      </Form>
    </div>
  );
}

export default SignUp;
