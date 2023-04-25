// @ts-ignore
import cookieCutter from "cookie-cutter";
const apiPostRequestHandler: Function = async (
  route: string,
  body: object,
  setErrorMessage: Function,
  auth?: boolean
) => {
  let success: boolean;

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());

    if (!!res.error)
      // if an error occurred
      setErrorMessage(res.error.message);
    else {
      // reset error message
      setErrorMessage("");
      if (!!auth) cookieCutter.set("token", res.token);
    }

    success = !res.error;
  } catch (e) {
    console.error(e);
    success = false;
  }
  return success;
};

export default apiPostRequestHandler;
