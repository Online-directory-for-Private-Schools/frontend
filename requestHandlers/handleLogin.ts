import { MouseEventHandler } from "react";
import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { NextRouter } from "next/router";

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
  apiPostRequestHandler("/auth/login", body, setErrorMessage, true).then(
    (success: boolean) => {
      console.log(success);
      if (success) router.push("/");
    }
  );
};
