import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

export interface IEditSchoolRequest {
  name?: string;
  bio?: string;
  isHiring?: boolean;
  cityId?: number;
  streetName?: string;
  website?: string;
  phone_number?: string;
  email?: string;
  lat?: string;
  lng?: string;
  token: string;
  id: string;
}

export class HandleEditSchoolProfile extends RequestHandler {
  name?: string;
  bio?: string;
  isHiring?: boolean;
  cityId?: number;
  streetName?: string;
  website?: string;
  phone_number?: string;
  email?: string;
  lat?: string;
  lng?: string;
  token: string;
  id: string;
  constructor({
    name,
    bio,
    isHiring,
    cityId,
    streetName,
    website,
    phone_number,
    email,
    lat,
    lng,
    token,
    id,
  }: IEditSchoolRequest) {
    super();
    this.name = name;
    this.bio = bio;
    this.isHiring = isHiring;
    this.cityId = cityId;
    this.streetName = streetName;
    this.website = website;
    this.phone_number = phone_number;
    this.email = email;
    this.lat = lat;
    this.lng = lng;
    this.token = token;
    this.id = id;
  }
  async execute({
    setErrorMessage,
    setSuccess,
    setSpinner,
  }: {
    setErrorMessage: Function;
    setSuccess: Function;
    setSpinner: Function;
  }) {
    const body = {
      name: this.name,
      bio: this.bio,
      isHiring: this.isHiring,
      cityId: Number(this.cityId),
      streetName: this.streetName,
      website: this.website,
      phone_number: this.phone_number,
      email: this.email,
      lat: this.lat,
      lng: this.lng,
      token: this.token,
      id: this.id,
    };
    const res: any = await super.put("/schools", body, this.token, body.id);
    if (!!res.error) {
      setSpinner(false);
      // if an error occurred
      setErrorMessage(res.error.message);
      setSuccess("");
    } else {
      setSpinner(false);
      setSuccess("Updated Successfully");

      // reset error message
      setErrorMessage("");
    }
  }
}
