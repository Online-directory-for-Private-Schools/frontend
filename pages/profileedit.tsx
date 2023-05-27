import React, { MouseEventHandler, useState } from "react";
import SignUp from "@/components/SignUp-Login/SignUp/SignUp";
import { NextApiRequest, NextApiResponse } from "next";
import ChangePasswordComponent from "@/components/SignUp-Login/ProfileEdit/ProfileEditComponent";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { HandleGetUser } from "@/requestHandlers/HandleGetUser";

const Cookies = require("cookies");

function ChangePassword() {
  return <ChangePasswordComponent />;
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
