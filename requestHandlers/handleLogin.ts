import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
import { NextRouter } from "next/router";
import { object, Requireable } from "prop-types";
const cookieCutter = require("cookie-cutter");

export interface ILogin {
  email: string;
  password: string;
}

export class HandleLogin extends RequestHandler {
  email: string;
  password: string;
  constructor({ email, password }: ILogin) {
    super();
    this.email = email;
    this.password = password;
  }
  execute({
    setErrorMessage,
    router,
  }: {
    setErrorMessage: Function;
    router: NextRouter;
  }) {
    const body = {
      email: this.email,
      password: this.password,
    };

    super.post("/auth/login", body).then((res: any) => {
      if (!!res.error)
        // if an error occurred
        setErrorMessage(res.error.message);
      else {
        // reset error message
        setErrorMessage("");
        cookieCutter.set("token", res.token);
      }
      if (!res.error)
        router.push("/home").catch((e: Error) => console.error(e));
    });
  }
}
