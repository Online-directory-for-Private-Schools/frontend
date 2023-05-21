import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
export class HandleGetSchool extends RequestHandler {
  id: string;
  token: string;
  constructor({ id, token }: { id: string; token: string }) {
    super();
    this.id = id;
    this.token = token;
  }
  async execute() {
    const res: any = await super.get("/schools/", this.id, this.token);
    // if an error occurred
    if (!!res.error)
      return {
        error: {
          message: res.error.message,
        },
      };
    else {
      return {
        res: res.data,
      };
    }
  }
}
