import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useState } from "react";
import Navbar from "./navbar";
import Form from "./form";
import InputGrp from "./input_grep";
import Input from "./input";
import Radio from "./radio";
import { InputInterface } from "@/interfaces/Input";

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdConfirm, setPasswdConfirm] = useState("");
  const [matching, setMatching] = useState(true);

  const [category, setCategory] = useState("student");
  const [phoneNumber, setPhoneNumber] = useState("");

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
    };

    apiPostRequestHandler("/auth/register", body, setErrorMessage, true).then(
      (success: boolean) => {
        if (success) router.push("/");
      }
    );
  };

  const categoryOptions = [
    {
      value: "student",
      label: "Student",
      onChange: (e: any) => {
        setCategory(e.target.value);
      },
    },
    {
      value: "educator",
      label: "Educator",
      onChange: (e: any) => {
        setCategory(e.target.value);
      },
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
  return (
    <div>
      <Navbar SignUp />
      <Form errorMessage={message} onSubmit={signUpHandler}>
        <>
          <InputGrp inputs={nameInputs} />
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
        </>
      </Form>
    </div>
  );
}

export default SignUp;
