import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";


export class HandleSendVerificationCode extends RequestHandler {

//   constructor({ token }
// : {
//     token: string; 
//   }){}


  constructor(){
    super();
  }
  
  execute({
    setErrorMessage,
    setCodeSent,
    setSpinner,
    router,
    token
  }: {
    setErrorMessage: Function;
    setCodeSent: Function;
    setSpinner: Function;
    router: NextRouter;
    token: string;
  }) {
    
    super.get("/auth/verification/send", "", token).then((res: any) => {
      if (!!res.error) {
        setSpinner(false);
        setErrorMessage(res.error.message);
      } else {
        setErrorMessage("");
        setCodeSent(true);
      }
    });
  }
}
