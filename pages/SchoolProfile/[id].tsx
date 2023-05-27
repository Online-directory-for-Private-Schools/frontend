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
import { UserType } from "@/interfaces/UserType.enum";

const Cookies = require("cookies");
const Navbar = dynamic(() => import("../../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export default function Id(props: { school: ISchoolResp; isOwner: boolean }) {
  return (
    <>
      <Navbar loggedIn />
      <SchoolProfile
        school={props.school}
        courses={[]}
        isOwner={props.isOwner}
      />
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
  // Get IDs from Browser
  const cookie = new Cookies(req, res);
  const token = cookie.get("token");
  const { id } = query;

  // user is not logged it, redirect
  if (token === "" || !token)
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };

  const schoolHandlerFactory = new HandlerFactory("get-school");
  const getSchoolHandler = schoolHandlerFactory.createHandler({
    id: id,
    token: token,
  }) as HandleGetSchool;

  const userHandlerFactory = new HandlerFactory("get-user");
  const getUserHandler = userHandlerFactory.createHandler({
    token: token,
  }) as HandleGetUser;

  const resp: any = await getUserHandler.execute();

  // User changed cookies, logout
  if (!resp.success) {
    cookie.set("token", "");

    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const response: any = await getSchoolHandler.execute();

  // If School ID is incorrect, redirect to /home
  if (!!response.error) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  // If user is School owner, give edit access
  if (resp.user.type === UserType.SCHOOL_OWNER) {
    // Check if the user owner is the owner of this SchoolProfile

    if (response.res.school.owner.id === resp.user.id) {
      return {
        props: { isOwner: true, school: response.res.school as ISchoolResp },
      };
    } else {
      return {
        props: { isOwner: false, school: response.res.school as ISchoolResp },
      };
    }
  }
}
