import { NextRouter } from "next/router";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
export interface ISchool {
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
    isHiring,
    cityId,
    street,
    userId,
    lng,
    lat,
  }: ISchool) {
    super();
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
    setErrorMessage,
    router,
  }: {
    setErrorMessage: Function;
    router: NextRouter;
  }) {
    const body = {
      name: this.schoolName,
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
        // if an error occurred
        setErrorMessage(res.error.message);
        router.push("/SchoolRegister").catch((e: Error) => console.error(e));
      } else {
        // reset error message
        setErrorMessage("");
        router.push("/home").catch((e: Error) => console.error(e));
      }
    });
  }
}
