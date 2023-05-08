// @ts-ignore
import cookieCutter from "cookie-cutter";
const apiPostRequestHandler: Function = async (
  route: string,
  body: object,
  token: string
) => {
  let success: boolean;

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());

    return res;
  } catch (e: any) {
    return { error: { message: e.message } };
  }
};

export default apiPostRequestHandler;
