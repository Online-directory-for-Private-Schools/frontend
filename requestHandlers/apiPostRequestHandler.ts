// @ts-ignore
import cookieCutter from "cookie-cutter";
const apiPostRequestHandler: Function = (
  route: string,
  body: object,
  setErrorMessage: Function
) => {
  fetch(process.env.NEXT_PUBLIC_BACKEND_URL + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      res.json().then((res) => {
        if (!!res.error)
          // if an error occurred
          setErrorMessage(res.error.message);
        else {
          // reset error message
          setErrorMessage("");
          // set Cookie
          cookieCutter.set("token", res.token);
        }
      });
    })
    .catch((e) => console.error(e));
};

export default apiPostRequestHandler;
