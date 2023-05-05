import React, { MouseEventHandler, useState } from "react";
import Navbar from "../navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import Form from "../form";
import Input from "../input";
import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  // error message
  let [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleLogin: MouseEventHandler = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: passwd,
    };
    apiPostRequestHandler("/auth/login", body, setErrorMessage, true).then(
      (success: boolean) => {
        console.log(success);
        if (success) router.push("/");
      }
    );
  };
  return (
    <>
      <Navbar Login />
      <Form errorMessage={errorMessage} onSubmit={handleLogin}>
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
          <div className="text-right hover:underline">
            <Link href={"/changepassword"}> Forgot password ?</Link>
          </div>
        </>
      </Form>
    </>
  );
}
