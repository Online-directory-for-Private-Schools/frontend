import { SchoolProfile } from "@/components/School/SchoolProfile";
import Footer from "@/components/landing/Footer/Footer";
import dynamic from "next/dynamic";
import React from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { NextApiRequestQuery } from "next/dist/server/api-utils";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { ISchoolResp } from "@/interfaces/ISchoolResp.interface";

const Cookies = require("cookies");
const Navbar = dynamic(() => import("../../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export default function Id(props: { school: ISchoolResp }) {
  const router = useRouter();
  return (
    <>
      <Navbar loggedIn />
      <SchoolProfile school={props.school} />
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
  const handlerFactory = new HandlerFactory("get-school");
  const getSchoolHandler = handlerFactory.createHandler({
    id: id,
    token: token,
  });
  // @ts-ignore
  const response = await getSchoolHandler.execute();

  if (!!response.error) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  console.log(response);
  return {
    props: { school: response.res.school as ISchoolResp },
  };
}
