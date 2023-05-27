import React, { MouseEventHandler, useState } from "react";
import SignUp from "@/components/SignUp-Login/SignUp/SignUp";
import { NextApiRequest, NextApiResponse } from "next";
import { ChangePassword } from "@/components/SignUp-Login/ProfileEdit/ProfileEditComponent";
import { EditUserInfo } from "@/components/SignUp-Login/ProfileEdit/ProfileEditComponent";
import { ChangeEmail } from "@/components/SignUp-Login/ProfileEdit/ProfileEditComponent";
import Navbar from "@/components/SignUp-Login/navbar";
import {HandlerFactory} from "@/requestHandlers/HandlerFactory";
import {HandleGetUser} from "@/requestHandlers/HandleGetUser";
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
  const handlerFactory = new HandlerFactory("get-user");
  const getUserHandler = handlerFactory.createHandler({
    token: token,
  }) as HandleGetUser;
  const resp = await getUserHandler.execute();

  if (resp.success)
    return {
      props: {},
    };

  cookie.set("token", "");

  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
  };
}
