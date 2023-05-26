import React, { MouseEventHandler, useState } from "react";
import SignUp from "@/components/SignUp-Login/SignUp/SignUp";
import { NextApiRequest, NextApiResponse } from "next";
import ChangePasswordComponent from "@/components/SignUp-Login/ProfileEdit/ProfileEditComponent";

const Cookies = require("cookies");

function ChangePassword() {
  return <ChangePasswordComponent/>;
}

export default ChangePassword;

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
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };

  return {
    props: {},
  };
}
