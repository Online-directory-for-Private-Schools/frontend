import HomeScreenDashBoard from "@/components/Home/HomeScreenDashBoard";
import dynamic from "next/dynamic";
import React from "react";
import schools from "@/components/landing/Hero/topSchools";

const Navbar = dynamic(() => import("../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export default function home() {
  return (
    <>
      <Navbar loggedIn />
      <HomeScreenDashBoard
        schools={schools}
        // courses={courses}
      />
    </>
  );
}
