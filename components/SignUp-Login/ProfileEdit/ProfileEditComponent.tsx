import React, { MouseEventHandler, useState } from "react";
import Navbar from "../navbar";
import { useRouter } from "next/router";
import Form from "../form";
import Input from "../input";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { HandleChangeEmail } from "@/requestHandlers/handleChangeEmail";
import Cookies from "js-cookie";
import { handleChangePassword } from "@/requestHandlers/handleChangePassowrd";
import SelectLocation from "../SelectLocation";
import { handleEditUserInfo } from "@/requestHandlers/handleEditUserInfo";

export function ChangePassword() {
  const [currentPasswd, setCurrentPasswd] = useState("");
  const [newPasswd, setNewPasswd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  // error message
  let [ErrorMessage, setErrorMessage] = useState("");
  let [SuccessMessage, setSuccessMessage] = useState("");

  const router = useRouter();
  // handle submition
  const handleSubmitPassword: MouseEventHandler = (e) => {
    e.preventDefault();
    if (newPasswd !== confirmPasswd) {
      setErrorMessage("New password and Confirm password do not match.");
      return;
    }

    const handlerFactory = new HandlerFactory("change-password");
    const token = Cookies.get("token");

    const changePasswordHandler = handlerFactory.createHandler({
      oldPassword: currentPasswd,
      newPassword: newPasswd,
      newPasswordConfirmation: confirmPasswd,
      token: token,
    }) as handleChangePassword;

    changePasswordHandler.execute({ setErrorMessage, setSuccessMessage });
  };

  return (
    <>
      <div className={"flex flex-row flex-wrap"}>
        <Form
          title={"Change Password"}
          errorMessage={ErrorMessage}
          
          onSubmit={handleSubmitPassword}
          SuccessMessage={SuccessMessage}
        >
          <>
            <Input
              type="password"
              label={"Current Password"}
              value={currentPasswd}
              onChange={(e: any) => setCurrentPasswd(e.target.value)}
            />
            <Input
              type="password"
              label={"New Password"}
              value={newPasswd}
              onChange={(e: any) => setNewPasswd(e.target.value)}
            />
            <Input
              type="password"
              label={"Confirm Password"}
              value={confirmPasswd}
              onChange={(e: any) => setConfirmPasswd(e.target.value)}
            />
          </>
        </Form>
      </div>
    </>
  );
}

export function ChangeEmail() {
  const [currentPasswd, setCurrentPasswd] = useState("");
  const [matching, setMatching] = useState(true);
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  // error message
  let [ErrorMessage, setErrorMessage] = useState("");
  let [SuccessMessage, setSuccessMessage] = useState("");

  const router = useRouter();
  const handleSubmit: MouseEventHandler = (e) => {
    e.preventDefault();
    const token = Cookies.get("token") as string;
    const handlerFactory = new HandlerFactory("change-email");
    const changeEmailHandler = handlerFactory.createHandler({
      confirmEmail,
      currentPasswd,
      token,
    }) as HandleChangeEmail;

    changeEmailHandler.execute({ setErrorMessage, setSuccessMessage });
  };

  return (
    <>
      <div className={"flex flex-row flex-wrap"}>
        <Form
          title={"Change Email"}
          errorMessage={ErrorMessage}
          SuccessMessage={SuccessMessage}
          onSubmit={handleSubmit}
          submitMessage={"Validate"}
        >
          <>
            <Input
              type="password"
              label={"Current Password"}
              value={currentPasswd}
              onChange={(e: any) => setCurrentPasswd(e.target.value)}
            />

            <Input
              type="email"
              label={"New Email"}
              value={newEmail}
              onChange={(e: any) => setNewEmail(e.target.value)}
              onBlur={() => {
                if (confirmEmail !== "" && confirmEmail !== newEmail) {
                  setMatching(false);
                } else {
                  setMatching(true);
                }
              }}
            />

            <Input
              type="email"
              label={"Confirm Email"}
              value={confirmEmail}
              onChange={(e: any) => setConfirmEmail(e.target.value)}
              onBlur={() => {
                if (confirmEmail !== newEmail) {
                  setMatching(false);
                } else {
                  setMatching(true);
                }
              }}
            />

            {!matching && (
              <div className={"text-right text-red-600 p-0"}>
                Unmatching Email
              </div>
            )}
          </>
        </Form>
      </div>
    </>
  );
}

export function EditUserInfo() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // error message
  let [ErrorMessage, setErrorMessage] = useState("");
  let [SuccessMessage, setSuccessMessage] = useState("");

  const router = useRouter();
  const handleSubmit: MouseEventHandler = (e) => {
    e.preventDefault();
    const token = Cookies.get("token") as string;
    const handlerFactory = new HandlerFactory("edit-user-info");
    const EditUserInfo = handlerFactory.createHandler({
      phoneNumber,
      city,
      name,
      token,
    }) as handleEditUserInfo;

    EditUserInfo.execute({ setErrorMessage, setSuccessMessage });
  };
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
        setProvince(e.target.value);
      },
    },
    {
      name: "City",
      value: city,
      onChange: (e: any) => setCity(e.target.value),
    },
  ];
  return (
    <>
      <div className={"flex flex-row flex-wrap"}>
        <Form
          title={"Edit User Info"}
          errorMessage={ErrorMessage}
          onSubmit={handleSubmit}
          submitMessage={"Submit"}
          SuccessMessage={SuccessMessage}
        >
          <>
            <Input
              type="text"
              label={"Name"}
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />

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

            <SelectLocation inputs={address} />
          </>
        </Form>
      </div>
    </>
  );
}
