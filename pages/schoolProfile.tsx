import {SchoolProfile} from "@/components/School/SchoolProfile";
import Footer from "@/components/landing/Footer/Footer";
import dynamic from "next/dynamic";
import React from "react";

const Navbar = dynamic(() => import("../components/landing/Navbar/Navbar"), {
    ssr: false,
  });

export default function schoolProfile(){

    return (
        <>
            <Navbar loggedIn />
            <SchoolProfile />
            <Footer />
        </>
    );  
    
}