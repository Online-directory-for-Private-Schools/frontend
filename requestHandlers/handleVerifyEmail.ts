import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

export interface IVerifyEmail {
    code: string;
}
export class HandleVerifyEmail extends RequestHandler {
  code: string;
  constructor({
    code
  }: IVerifyEmail) {
    super();
    this.code = code;
  }

  execute({
    setErrorMessage,
    setSpinner,
    router,
    code
  }: {
    setErrorMessage: Function;
    setSpinner: Function;
    router: NextRouter;
    code: string
  }) {
    const body = {
      code
    };

    super.post("/auth/verification/verify", body).then((res: any) => {
      if (!!res.error) {
        setSpinner(false);
        setErrorMessage(res.error.message);
      } else {
        setErrorMessage("");
        if (!res.error)
          router.push("/home").catch((e: Error) => console.error(e));
      }
    });
  }
}
