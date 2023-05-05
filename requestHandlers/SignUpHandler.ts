import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { NextRouter, Router } from "next/router";

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

  apiPostRequestHandler("/auth/register", body, setErrorMessage, true).then(
    (success: boolean) => {
      if (success) {
        if (category === "student") router.push("/");
      } else {
        router.push("/SchoolRegister");
      }
    }
  );
};
