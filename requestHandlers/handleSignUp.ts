import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { NextRouter, Router } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";

export const handleSignUp: (
  firstname: string,
  lastname: string,
  email: string,
  phoneNumber: string,
  passwd: string,
  category: string,
  country: string,
  province: string,
  cityName: string,
  setErrorMessage: Function,
  router: NextRouter
) => void = (
  firstname,
  lastname,
  email,
  phoneNumber,
  passwd,
  category,
  country,
  province,
  cityName,
  setErrorMessage,
  router
) => {
  const body = {
    name: firstname + " " + lastname,
    email: email,
    phone_number: phoneNumber,
    password: passwd,
    type: category,
    country: country,
    province: province,
    city: cityName,
  };

  apiPostRequestHandler("/auth/register", body).then((res: any) => {
    if (!!res.error) setErrorMessage(res.error.message);
    else {
      setErrorMessage("");
      cookieCutter.set("token", res.token);
      if (!res.error) router.push("/SchoolRegister");
    }
  });
};
