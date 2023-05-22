import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

export interface IChangePassword {
  currentPasswd : string;
  newPasswd : string;
  confirmPasswd : string;
  token : string;
}
export class handleChangePassword extends RequestHandler {
  currentPasswd : string;
  newPasswd : string;
  confirmPasswd : string;
  token : string;
  constructor({
    currentPasswd,
    newPasswd,
    confirmPasswd,
    token
  }: {
    currentPasswd : string;
    newPasswd : string;
    confirmPasswd : string;
    token : string;
  }) {
    super();
    this.currentPasswd = currentPasswd;
    this.newPasswd = newPasswd;
    this.confirmPasswd = confirmPasswd;
    this.token = token;
  }

  execute({
    setErrorMessage,
  }: {
    setErrorMessage: Function;
  }) {
    const body = {
      currentPasswd: this.currentPasswd,
      newPasswd: this.newPasswd,
      confirmPasswd: this.confirmPasswd
    };

    super.put("/auth/change/password", body, this.token).then((res: any) => {
      if (!!res.error) setErrorMessage(res.error.message);
      else {
        setErrorMessage("");
      // set succes message
      }
    });
  }
}
