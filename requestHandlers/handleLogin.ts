import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";

export const LoginHandler: Function = (
  {
    email,
    passwd,
  }: {
    email: string;
    passwd: string;
  },
  setErrorMessage: Function,
  router: NextRouter
) => {
  const body = {
    email: email,
    password: passwd,
  };
  apiPostRequestHandler("/auth/login", body, setErrorMessage).then(
    (res: any) => {
      if (!!res.error)
        // if an error occurred
        setErrorMessage(res.error.message);
      else {
        // reset error message
        setErrorMessage("");
        cookieCutter.set("token", res.token);
      }
      if (!res.error) router.push("/home");
    }
  );
};
