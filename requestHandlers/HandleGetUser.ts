// @ts-ignore
import cookieCutter from "cookie-cutter";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

export class HandleGetUser extends RequestHandler {
  token: string;
  constructor({ token }: { token: string }) {
    super();
    this.token = token;
  }

  async execute() {
    try {
      const jwt = require("jsonwebtoken");
      const user = jwt.decode(this.token);

      const res = await super.get("/user", `/${user.id}`, this.token);
      console.error(res);

      if (!!res.error) return { error: { message: "invalid token" } };
      // @ts-ignore
      return { success: true, user: res.user };
    } catch (e) {
      return { error: { message: "invalid token" } };
    }
  }
}
