import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
import { NextRouter } from "next/router";
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
    setSpinner,
    router,
  }: {
    setErrorMessage: Function;
    setSpinner: Function;
    router: NextRouter;
  }) {
    const body = {
      email: this.email,
      password: this.password,
    };

    super.post("/auth/login", body).then((res: any) => {
      if (!!res.error) {
        setSpinner(false);
        // if an error occurred
        setErrorMessage(res.error.message);
      } else {
        // reset error message
        setErrorMessage("");
        cookieCutter.set("token", res.token);
      }
      if (!res.error)
        router.push("/home").catch((e: Error) => console.error(e));
    });
  }
}
