import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
import { NextRouter } from "next/router";
import Cookies from "js-cookie";

export interface IChangeEmail {
  confirmEmail: string;
  token: string;
  password: string;
}

export class HandleChangeEmail extends RequestHandler {
  email: string;
  token: string;
  password: string;
  constructor({ confirmEmail, password, token }: IChangeEmail) {
    super();
    this.email = confirmEmail;
    this.token = token;
    this.password = password;
  }
  execute({
    setErrorMessage,
    setSuccessMessage,
  }: {
    setErrorMessage: Function;
    setSuccessMessage: Function;
  }) {
    const body = {
      email: this.email,
      password: this.password,
    };

    super.put("/auth/change/email", body, this.token).then((res: any) => {
      console.log(res);
      if (!!res.error) {
        // if an error occurred
        setErrorMessage(res.error.message);
        setSuccessMessage(res.info);
      } else {
        // reset error message
        setErrorMessage("");
        setSuccessMessage(res.info);
        console.log(res.info)
      }
    });
  }
}
