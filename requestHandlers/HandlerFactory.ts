import { HandleLogin, ILogin } from "@/requestHandlers/handleLogin";
import { HandleSignUp, ISignUp } from "@/requestHandlers/handleSignUp";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
import {
  HandleSchoolRegister,
  ISchool,
} from "@/requestHandlers/handleSchoolRegiser";
import { HandleGetSchool } from "@/requestHandlers/handleGetSchool";
import { HandleGetUser } from "@/requestHandlers/HandleGetUser";

export class HandlerFactory {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  createHandler(body?: object): HandleLogin | HandleSignUp | RequestHandler {
    if (this.type === "login") {
      if (!body) throw Error("Body not provided");
      return new HandleLogin(<ILogin>body);
    } else if (this.type === "signup") {
      if (!body) throw Error("Body not provided");
      return new HandleSignUp(<ISignUp>body);
    } else if (this.type === "general") {
      return new RequestHandler();
    } else if (this.type === "school-register") {
      if (!body) throw Error("Body not provided");
      return new HandleSchoolRegister(<ISchool>body);
    } else if (this.type === "get-school") {
      if (!body) throw Error("Body not provided");
      return new HandleGetSchool(<{ id: string; token: string }>body);
    } else if (this.type === "get-user") {
      if (!body) throw Error("Body not provided");
      return new HandleGetUser(<{ token: string }>body);
    } else {
      throw Error("Undefined Type of Request Handler");
    }
  }
}
