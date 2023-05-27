import cookie from "js-cookie";

export class RequestHandler {
  async post(route: string, body: object) {
    try {
      return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookie.get("token"),
        },
        body: JSON.stringify(body),
      }).then((res) => res.json());
    } catch (e: any) {
      return { error: { message: "Server is down" } };
    }
  }

  async get(route: string, query: string, token: string) {
    try {
      let res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + route + query,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
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

  async delete(route: string, id: string) {
    try {
      let res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + route + "/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookie.get("token"),
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

  async put(route: string, id: string, body: object) {
    try {
      return await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + route + "/" + id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookie.get("token"),
          },
          body: JSON.stringify(body),
        }
      ).then((res) => res.json());
    } catch (e: any) {
      return { error: { message: e.message } };
    }
  }
}
