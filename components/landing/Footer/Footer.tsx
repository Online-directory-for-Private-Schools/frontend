// src/components/Footer.js
import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import Image from "next/image";
import Logo from "@/public/School_Logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id={"page_footer"}>
      <div className="row">
        <div className="col">
          <Image
            src={Logo.src}
            className="logo"
            alt={""}
            width={80}
            height={80}
          ></Image>
          <p className="desc">
            Our first of a kind platform joins you with best institutes, schools
            and teachers in the country
          </p>
        </div>
        <div className="col">
          <h3>Office</h3>
          <p>Sidi Abdellah</p>
          <p>Algiers</p>
          <p>PIN 5600-54, Algeria</p>
          <p className="email-id">course.seeker.dz@gmail.com</p>
          <h3>+2135 53 28 65 04</h3>
        </div>

        <div className="">
          <div className="social-icons flex flex-row">
            <Link href="#">
              {" "}
              <FaInstagram className="Fa" />
            </Link>
            <Link href="#">
              {" "}
              <FaTwitter className="Fa" />
            </Link>
            <Link href="#">
              {" "}
              <FaFacebook className="Fa" />
            </Link>
            <Link href="#">
              {" "}
              <FaLinkedinIn className="Fa" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
