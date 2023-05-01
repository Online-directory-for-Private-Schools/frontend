import React, { MouseEventHandler, useState } from "react";
import SignUp from "@/components/SignUp-Login/SignUp/SignUp";
import { NextApiRequest, NextApiResponse } from "next";

const Cookies = require("cookies");

function Sign_up() {
  return <SignUp />;
}

export default Sign_up;

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
