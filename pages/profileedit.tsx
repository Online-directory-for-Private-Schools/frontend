import React, { MouseEventHandler, useState } from "react";
import SignUp from "@/components/SignUp-Login/SignUp/SignUp";
import { NextApiRequest, NextApiResponse } from "next";
import { ChangePassword } from "@/components/SignUp-Login/ProfileEdit/ProfileEditComponent";
import { EditUserInfo } from "@/components/SignUp-Login/ProfileEdit/ProfileEditComponent";
import { ChangeEmail } from "@/components/SignUp-Login/ProfileEdit/ProfileEditComponent";
import Navbar from "@/components/SignUp-Login/navbar";
const Cookies = require("cookies");

function EditUserProfile() {
  return (
    <>
      <Navbar />
      <ChangePassword />;
      <EditUserInfo />
      <ChangeEmail />
    </>
  );
}

export default EditUserProfile;

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
