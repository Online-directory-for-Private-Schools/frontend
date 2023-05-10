import cookie from "js-cookie";
import { NextRouter } from "next/router";

export class RequestHandler {
  async post(route: string, body: object) {
    try {
      return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookie.get("TOKEN"),
        },
        body: JSON.stringify(body),
      }).then((res) => res.json());
    } catch (e: any) {
      return { error: { message: e.message } };
    }
  }

  async get(route: string, query?: string) {
    try {
      query = !query ? "" : "/?" + query;
      let res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + route + query,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookie.get("TOKEN"),
          },
        }
      ).catch((e) => console.log(e));

      // @ts-ignore
      if ("json" in res) {
        res = await res.json();
      }
      // @ts-ignore
      if (!!res.error)
        // if an error occurred
        return {
          error: {
            // @ts-ignore
            message: res.error.message,
          },
        };
      else {
        return {
          data: res,
        };
      }
    } catch (e: any) {
      // if an error occurred
      return {
        error: {
          message: e.message,
        },
      };
    }
  }
}
