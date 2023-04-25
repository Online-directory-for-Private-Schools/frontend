import React, { MouseEventHandler, useState } from "react";
import Link from "next/link";
import apiPostRequestHandler from "@/requestHandlers/apiPostRequestHandler";
import { useRouter } from "next/router";
import SignUp from "@/components/SignUp-Login/SignUp";

function Sign_up() {
  

  return <SignUp />;
}

export default Sign_up;
