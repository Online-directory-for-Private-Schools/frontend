import HomeScreenDashBoard from "@/components/Home/HomeScreenDashBoard";
import dynamic from "next/dynamic";
import React, { createContext, useContext, useEffect, useState } from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { HandleGetUser } from "@/requestHandlers/HandleGetUser";
const Cookies = require("cookies");

const Navbar = dynamic(() => import("../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export const CourseContext = createContext({
  course: false,
  setCourse: (value: boolean) => null,
});

export default function Home() {
  let [course, setCourse] = useState(false);

  return (
    // @ts-ignore
    <CourseContext.Provider value={{ course: course, setCourse: setCourse }}>
      <Navbar home loggedIn />
      <HomeScreenDashBoard course={course} />
    </CourseContext.Provider>
  );
}

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
