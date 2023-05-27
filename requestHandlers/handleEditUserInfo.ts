import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

const jwt = require("jsonwebtoken");

export interface IEditUserInfo {
  name: string;
  city: string;
  PhoneNumber: string;
  token: string;
}
export class handleEditUserInfo extends RequestHandler {
  name: string;
  city: string;
  PhoneNumber: string;
  token: string;
  constructor({ name, city, PhoneNumber, token }: IEditUserInfo) {
    super();
    this.name = name;
    this.city = city;
    this.PhoneNumber = PhoneNumber;
    this.token = token;
  }

  execute({
    setErrorMessage,
    setSuccessMessage,
    setSpinner,
  }: {
    setErrorMessage: Function;
    setSuccessMessage: Function;
    setSpinner: Function;
  }) {
    const body = {
      name: this.name,
      city: this.city,
      phone_number: this.PhoneNumber,
      token: this.token,
    };

    const { id } = jwt.decode(this.token);
    super.put(`/user/${id}`, body, this.token).then((res: any) => {
      if (!!res.error) {
        setSpinner(false);
        setSuccessMessage("");
        setErrorMessage(res.error.message);
      } else {
        setSpinner(false);
        setErrorMessage("");
        setSuccessMessage("Information changed !");
      }
    });
  }
}
