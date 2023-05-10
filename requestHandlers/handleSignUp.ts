import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";

export const handleSignUp: (
  firstname: string,
  lastname: string,
  email: string,
  phoneNumber: string,
  passwd: string,
  category: string,
  cityId: string,
  setErrorMessage: Function,
  router: NextRouter
) => void = (
  firstname,
  lastname,
  email,
  phoneNumber,
  passwd,
  category,
  cityId,
  setErrorMessage,
  router
) => {
  const body = {
    name: firstname + " " + lastname,
    email: email,
    phone_number: phoneNumber,
    password: passwd,
    type: category,
    cityId: cityId,
  };

  console.log(body);
  apiPostRequestHandler("/auth/register", body).then((res: any) => {
    if (!!res.error) setErrorMessage(res.error.message);
    else {
      setErrorMessage("");
      cookieCutter.set("token", res.token);
      if (!res.error && category === "school_owner")
        router.push("/SchoolRegister");
      else if (!res.error && category === "student") router.push("/home");
    }
  });
};
