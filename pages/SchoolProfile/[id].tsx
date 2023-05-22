import { SchoolProfile } from "@/components/School/SchoolProfile";
import Footer from "@/components/landing/Footer/Footer";
import dynamic from "next/dynamic";
import React from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequestQuery } from "next/dist/server/api-utils";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { ISchoolResp } from "@/interfaces/ISchoolResp.interface";
import { HandleGetSchool } from "@/requestHandlers/handleGetSchool";
import { HandleGetUser } from "@/requestHandlers/HandleGetUser";

const Cookies = require("cookies");
const Navbar = dynamic(() => import("../../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export default function Id(props: { school: ISchoolResp }) {
  return (
    <>
      <Navbar loggedIn />
      <SchoolProfile school={props.school} courses={[]} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({
  req,
  res,
  query,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  query: NextApiRequestQuery;
}) {
  const cookie = new Cookies(req, res);
  const token = cookie.get("token");
  const { id } = query;
  const schoolHandlerFactory = new HandlerFactory("get-school");
  const getSchoolHandler = schoolHandlerFactory.createHandler({
    id: id,
    token: token,
  }) as HandleGetSchool;

  if (token === "" || !token)
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  const userHandlerFactory = new HandlerFactory("get-user");
  const getUserHandler = userHandlerFactory.createHandler({
    token: token,
  }) as HandleGetUser;
  const resp = await getUserHandler.execute();

  if (!resp.success) {
    cookie.set("token", "");

    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const response = await getSchoolHandler.execute();

  if (!!response.error) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  return {
    props: { school: response.res.school as ISchoolResp },
  };
}
