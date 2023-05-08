// @ts-ignore
import cookieCutter from "cookie-cutter";

const apiPostRequestHandler: Function = async (
  route: string,
  body: object,
  token: string
) => {
  try {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  } catch (e: any) {
    return { error: { message: e.message } };
  }
};

export default apiPostRequestHandler;
