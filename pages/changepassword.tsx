import React, { MouseEventHandler, useState } from "react";
import SignUp from "@/components/SignUp-Login/SignUp/SignUp";
import { NextApiRequest, NextApiResponse } from "next";
import ChangePasswordComponent from "@/components/SignUp-Login/ChangePassword/ChangePasswordComponent";

const Cookies = require("cookies");

function ChangePassword() {
  return <ChangePasswordComponent />;
}

export default ChangePassword;
