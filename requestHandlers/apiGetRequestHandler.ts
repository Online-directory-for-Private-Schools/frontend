import cookie from "js-cookie";

const apiGetRequestHandler: Function = async (
  route: string,
  query?: string
) => {
  try {
    query = !query ? "" : "/?" + query;
    let res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + route + query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookie.get("TOKEN"),
      },
    }).catch((e) => console.log(e));

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
};

export default apiGetRequestHandler;
