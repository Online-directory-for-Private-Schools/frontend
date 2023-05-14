import HomeScreenDashBoard from "@/components/Home/HomeScreenDashBoard";
import dynamic from "next/dynamic";
import React, { createContext, useContext, useState } from "react";
import schools from "@/components/Home/Schools";
import courses from "@/components/Home/Courses";
import { NextApiRequest, NextApiResponse } from "next";
const Cookies = require("cookies");

const Navbar = dynamic(() => import("../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export const CourseContext = createContext({
  course: false,
  setCourse: (value: boolean) => null,
});
export default function home() {
  let [course, setCourse] = useState(false);
  return (
    // @ts-ignore
    <CourseContext.Provider value={{ course: course, setCourse: setCourse }}>
      <Navbar home loggedIn />
      <HomeScreenDashBoard
        schools={schools}
        courses={courses}
        course={course}
      />
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

  return {
    props: {},
  };
}
