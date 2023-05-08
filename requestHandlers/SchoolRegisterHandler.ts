import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { NextRouter } from "next/router";

export const handleSchoolRegister: (
  schoolName: string,
  bio: string,
  isHiring: boolean,
  country: string,
  province: string,
  cityName: string,
  street: string,
  userId: string,
  setErrorMessage: Function,
  router: NextRouter,
  lng?: string,
  lat?: string
) => void = (
  schoolName,
  bio,
  isHiring,
  country,
  province,
  cityName,
  street,
  userId: string,
  setErrorMessage,
  router: NextRouter,
  lng,
  lat
) => {
  const body = {
    name: schoolName,
    bio: bio,
    isHiring: isHiring,
    lng: lng,
    lat: lat,
    city: cityName,
    province: province,
    street_name: street,
    country: country,
    userId: userId,
  };

  apiPostRequestHandler("/school", body, setErrorMessage, true).then(
    (success: boolean) => {
      if (success) router.push("/");
    }
  );
};
