import { NextRouter } from "next/router";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
export interface ISchool {
  phoneNumber: string;
  email: string;
  website: string;
  schoolName: string;
  bio: string;
  isHiring: boolean;
  cityId: string;
  street: string;
  userId: string;
  lng?: string;
  lat?: string;
}

export class HandleSchoolRegister extends RequestHandler {
  schoolName: string;
  phoneNumber: string;
  email: string;
  website: string;
  bio: string;
  isHiring: boolean;
  cityId: string;
  street: string;
  userId: string;
  lng?: string;
  lat?: string;
  constructor({
    schoolName,
    bio,
    website,
    email,
    phoneNumber,
    isHiring,
    cityId,
    street,
    userId,
    lng,
    lat,
  }: ISchool) {
    super();
    this.website = website;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.schoolName = schoolName;
    this.bio = bio;
    this.isHiring = isHiring;
    this.cityId = cityId;
    this.street = street;
    this.userId = userId;
    this.lng = lng;
    this.lat = lat;
  }

  execute({
    setSpinner,
    setErrorMessage,
    router,
  }: {
    setSpinner: Function;
    setErrorMessage: Function;
    router: NextRouter;
  }) {
    const body = {
      name: this.schoolName,
      phone_number: this.phoneNumber,
      email: this.email,
      website: this.website,
      bio: this.bio,
      isHiring: this.isHiring,
      lng: Number(this.lng),
      lat: Number(this.lat),
      cityId: Number(this.cityId),
      street_name: this.street,
      userId: this.userId,
    };

    super.post("/schools", body).then((res: any) => {
      if (!!res.error) {
        setSpinner(false);
        // if an error occurred
        setErrorMessage(res.error.message);
      } else {
        // reset error message
        setErrorMessage("");
        router.push("/home").catch((e: Error) => console.error(e));
      }
    });
  }
}
