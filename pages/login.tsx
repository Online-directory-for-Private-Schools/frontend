import React from "react";
import LogIn from "@/components/SignUp-Login/Login/Login";
import { NextApiRequest, NextApiResponse } from "next";
import Navbar from "@/components/SignUp-Login/navbar";

const Cookies = require("cookies");

const Login = () => {
  return (
    <>
      <Navbar Login />
      <LogIn />
    </>
  );
};

export default Login;

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const cookie = new Cookies(req, res);
  const token = cookie.get("token");

  if (token === "" || !token)
    return {
      props: {},
    };

  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
}
