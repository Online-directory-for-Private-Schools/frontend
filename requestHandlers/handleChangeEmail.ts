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
    setSpinner,
  }: {
    setSpinner: Function;
    setErrorMessage: Function;
    setSuccessMessage: Function;
  }) {
    const body = {
      email: this.email,
      password: this.password,
    };

    super.put("/auth/change/email", body, this.token).then((res: any) => {
      if (!!res.error) {
        setSpinner(false);
        setSuccessMessage("");
        setErrorMessage(res.error.message);
      } else {
        setSpinner(false);
        setErrorMessage("");
        setSuccessMessage("Information changed !");
      }
    });
  }
}
