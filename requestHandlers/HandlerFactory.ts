import { HandleLogin, ILogin } from "@/requestHandlers/handleLogin";
import { HandleSignUp, ISignUp } from "@/requestHandlers/handleSignUp";
import { RequestHandler } from "@/requestHandlers/RequestHandler";

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
    } else if ("general") {
      return new RequestHandler();
    } else {
      throw Error("Undefined Type of Request Handler");
    }
  }
}
