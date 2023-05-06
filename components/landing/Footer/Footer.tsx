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
            put small desc put small desc put small desc put small desc put
            small desc put small desc put small desc put small{" "}
          </p>
        </div>
        <div className="col">
          <h3>Office</h3>
          <p>Sidi Abdellah</p>
          <p>Algiers</p>
          <p>Whitefield</p>
          <p>PIN 5600-54, Algeria</p>
          <p className="email-id">courseSeeker@ensia.edu.dz</p>
          <h3>+231- 036839398</h3>
        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter</h3>
          <form>
            <BsFillEnvelopeFill className="far enevelope" />
            <input type="email" placeholder="Enter your email" required></input>
            <button type="submit">
              <BiSend className="send" />
            </button>
          </form>
          <div className="social-icons">
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
