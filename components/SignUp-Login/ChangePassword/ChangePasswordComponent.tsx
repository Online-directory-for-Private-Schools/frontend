import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useState } from "react";
import Form from "../form";
import InputGrp from "../InputGrp";
import Input from "../input";
import { InputInterface } from "@/interfaces/Input";
import Navbar from "@/components/SignUp-Login/navbar";

function ChangePasswordComponent() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matching, setMatching] = useState(true);

  // error message
  let [message, setErrorMessage] = useState("");

  const router = useRouter();
  const handleSubmit: MouseEventHandler = (e) => {
    e.preventDefault();
    const body = {
      current_password: currentPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };

    apiPostRequestHandler("/auth/change-password", body, setErrorMessage, true).then(
      (success: boolean) => {
        if (success) router.push("/");
      }
    );
  };

  return (
    <div>
      <Navbar changePassword />
      <Form title={"Change Password"} errorMessage={message} onSubmit={handleSubmit} submitMessage={"Validate"}>
        <>
          <Input
            type="password"
            label={"Current Password"}
            value={currentPassword}
            onChange={(e: any) => setCurrentPassword(e.target.value)}
          />

          <Input
            type="password"
            label={"New Password"}
            value={newPassword}
            onChange={(e: any) => setNewPassword(e.target.value)}
            onBlur={() => {
              if (confirmPassword !== "" && confirmPassword !== newPassword) {
                setMatching(false);
              } else {
                setMatching(true);
              }
            }}
          />

          <Input
            type="password"
            label={"Confirm Password"}
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
            onBlur={() => {
              if (confirmPassword !== newPassword) {
                setMatching(false);
              } else {
                setMatching(true);
              }
            }}
          />

          {!matching && (
            <div className={"text-right text-red-600 p-0"}>
              Unmatching Password
            </div>
          )}
        </>
      </Form>
    </div>
  );
}

export default ChangePasswordComponent;
