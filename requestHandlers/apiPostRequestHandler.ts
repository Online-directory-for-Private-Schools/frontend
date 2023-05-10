// @ts-ignore
import cookie from "js-cookie";

const apiPostRequestHandler: Function = async (route: string, body: object) => {
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
};

export default apiPostRequestHandler;
