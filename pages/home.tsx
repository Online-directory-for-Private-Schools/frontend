import HomeScreenDashBoard from "@/components/Home/HomeScreenDashBoard";
import dynamic from "next/dynamic";
import React from "react";

const Navbar = dynamic(() => import("../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export default function home() {
  return (
    <>
      <Navbar loggedIn />
      <HomeScreenDashBoard />
    </>
  );
}
