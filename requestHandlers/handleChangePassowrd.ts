import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
  token: string;
}
export class handleChangePassword extends RequestHandler {
  oldPassword: string;
  newPasswd: string;
  newPasswordConfirmation: string;
  token: string;
  constructor({
    oldPassword,
    newPassword,
    newPasswordConfirmation,
    token,
  }: IChangePassword) {
    super();
    this.oldPassword = oldPassword;
    this.newPasswd = newPassword;
    this.newPasswordConfirmation = newPasswordConfirmation;
    this.token = token;
  }

  execute({
    setErrorMessage,
    setSuccessMessage,
    setSpinner,
  }: {
    setSpinner: Function;
    setErrorMessage: Function;
    setSuccessMessage: Function;
  }) {
    const body = {
      oldPassword: this.oldPassword,
      newPassword: this.newPasswd,
      newPasswordConfirmation: this.newPasswordConfirmation,
    };

    super.put("/auth/change/password", body, this.token).then((res: any) => {
      if (!!res.error) {
        setSpinner(false);
        setErrorMessage(res.error.message);
        setSuccessMessage("");
      } else {
        setSpinner(false);
        setErrorMessage("");
        setSuccessMessage("Information changed !");
      }
    });
  }
}
