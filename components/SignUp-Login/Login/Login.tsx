import React, { MouseEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Form from "../form";
import Input from "../input";
import { HandleLogin } from "@/requestHandlers/handleLogin";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  // error message
  let [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleLogin: Function = (e: MouseEvent, setSpinner: Function) => {
    e.preventDefault();

    if (email === "" || passwd === "") {
      setSpinner(false);
      setErrorMessage("Please enter a valid email or password");
      return;
    }
    const handlerFactory = new HandlerFactory("login");
    const loginHandler = handlerFactory.createHandler({
      email: email,
      password: passwd,
    }) as HandleLogin;
    loginHandler.execute({
      setErrorMessage: setErrorMessage,
      setSpinner: setSpinner,
      router: router,
    });
  };
  return (
    <>
      <Form
        Login
        errorMessage={errorMessage}
        onSubmit={handleLogin}
        submitMessage={"Login"}
      >
        <>
          <Input
            type="email"
            label={"Email"}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label={"Password"}
            value={passwd}
            onChange={(e: any) => setPasswd(e.target.value)}
          />
          {/*<div className="text-right hover:underline">*/}
          {/*  <Link href={"/changepassword"}> Forgot password ?</Link>*/}
          {/*</div>*/}
        </>
      </Form>
    </>
  );
}
