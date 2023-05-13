import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

export interface ISignUp {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  passwd: string;
  category: string;
  city: string;
}
export class HandleSignUp extends RequestHandler {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  passwd: string;
  category: string;
  city: string;
  constructor({
    firstname,
    lastname,
    email,
    phoneNumber,
    passwd,
    category,
    city,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    passwd: string;
    category: string;
    city: string;
  }) {
    super();
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.passwd = passwd;
    this.category = category;
    this.city = city;
  }

  execute({
    setErrorMessage,
    router,
  }: {
    setErrorMessage: Function;
    router: NextRouter;
  }) {
    const body = {
      name: this.firstname + " " + this.lastname,
      email: this.email,
      phone_number: this.phoneNumber,
      password: this.passwd,
      type: this.category,
      cityId: this.city,
    };

    super.post("/auth/register", body).then((res: any) => {
      if (!!res.error) setErrorMessage(res.error.message);
      else {
        setErrorMessage("");
        cookieCutter.set("token", res.token);
        if (!res.error && this.category === "school_owner")
          router.push("/SchoolRegister").catch((e: Error) => console.error(e));
        else if (!res.error && this.category === "student")
          router.push("/home").catch((e: Error) => console.error(e));
      }
    });
  }
}
