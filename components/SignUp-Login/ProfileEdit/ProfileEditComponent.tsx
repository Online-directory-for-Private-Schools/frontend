import React, { MouseEventHandler, useState } from "react";
import Navbar from "../navbar";
import { useRouter } from "next/router";
import Form from "../form";
import Input from "../input";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { handleChangePassword } from "@/requestHandlers/handlePasswordChange";
import cookies from "js-cookie";


export default function ChangeProfileInfoComponent() {
  
  const [currentPasswd, setCurrentPasswd] = useState("");
  const [newPasswd, setNewPasswd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [matching, setMatching] = useState(true);
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  // error message
  let [message, setErrorMessage] = useState("");
  const router = useRouter();

  // handle submition
  const handleSubmitPassword: MouseEventHandler = (e) => {
    e.preventDefault();
    if (newPasswd !== confirmPasswd) {
      setErrorMessage("New password and Confirm password do not match.");
      return;
    }

    const handlerFactory = new HandlerFactory("change-password");
    const token = cookies.get("token");



    const changePasswordHandler = handlerFactory.createHandler({
      oldPassword: currentPasswd,
      newPassword: newPasswd,
      newPasswordConfirmation: confirmPasswd,
      token: token
    }) as handleChangePassword;

    changePasswordHandler.execute({ setErrorMessage });


  };
  return (
    <>
      <Navbar />
      <div className={"flex flex-row flex-wrap"}>
        <Form
          title={"Change Email"}
          errorMessage={message}
          onSubmit={() => { }}
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

        <Form
          title={"Change Password"}
          errorMessage={message}
          onSubmit={handleSubmitPassword}
          submitMessage={"Submit"}
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
        <Form
          title={"Edit User Info"}
          errorMessage={message}
          onSubmit={() => { }}
          submitMessage={"Submit"}
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
              label={"City"}
              value={city}
              onChange={(e: any) => setCity(e.target.value)}
            />

            <Input
              type="text"
              label={"Province"}
              value={province}
              onChange={(e: any) => setProvince(e.target.value)}
            />

            <Input
              type="text"
              label={"Country"}
              value={country}
              onChange={(e: any) => setCountry(e.target.value)}
            />
          </>
        </Form>
      </div>
    </>
  );
}
