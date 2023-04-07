import * as React from "react";
import Image from "next/image";
import { links } from "@/components/landing/Navbar/links";
import Link from "next/link";
import hamburger from "@/public/bars-solid.svg";
import closeIcon from "@/public/close.svg";
import logo from "@/public/School_Logo.svg";
import {MouseEventHandler, useState} from "react";
import SearchBar from "@/components/landing/Navbar/SearchBar";

interface NavbarProps {
  loggedIn?: boolean;
}

export default function Navbar({ loggedIn }: NavbarProps) {
  let [clicked, setClicked] = useState(false);

  const handleResize: EventListener = () => {
    if (window.screen.width >= 768 && clicked) {
      console.log("clicked");
      window.removeEventListener("resize", handleResize);
      setClicked(false);
    }
  };
  window.addEventListener("resize", handleResize);
  const toggleLinks: MouseEventHandler = (event) => {
    event.stopPropagation();
    setClicked(!clicked);
  };

  const close: MouseEventHandler = () => setClicked(false);
  const login: String = "login";
  const signUp: String = "Sign Up";

  return (
    <div
      className={
        clicked
          ? "flex flex-row justify-center w-[100%] h-[100vh] bg-black/70"
          : "flex flex-row justify-center w-[100%] h-[100vh]"
      }
      onClick={close}
    >
      <div
        className={
          "shadow z-50 flex flex-row justify-between fixed w-[95%] mt-4 p-2 gap-2 bg-white rounded-2xl h-20"
        }
      >
        <div className={"w-[10%] lg:w-[25%] flex justify-left"}>
          <Image
            className={" hidden lg:block bg-dark-blue p-1 rounded-xl"}
            src={logo.src}
            alt={"logo"}
            width={200}
            height={36}
          />
          <Image
            className={"lg:hidden block cursor-pointer"}
            src={clicked ? closeIcon.src : hamburger.src}
            alt={"X"}
            width={50}
            height={20}
            onClick={toggleLinks}
          />
        </div>
        <ul
          className={"lg:flex flex-row justify-center gap-20 hidden lg:w-[50%]"}
        >
          {links.map((link, index) => (
            <li className={"link"} key={index}>
              <Link href={link.route} draggable={"false"}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {clicked && (
          <div className={"fixed w-[100%] flex justify-center top-28 left-0"}>
            <div
              className={
                "bg-white p-4 rounded-xl w-[95%] text-center flex flex-col "
              }
            >
              <ul>
                {links.map((link, index) => (
                  <Link key={index} href={link.route} draggable={"false"}>
                    <li
                      className={
                        index == 0 ? "link p-5" : "link p-5 border-t-2"
                      }
                    >
                      {link.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className={"flex justify-end lg:w-[25%] w-[90%]"}>
          {loggedIn ? (
            <SearchBar />
          ) : (
            <>
              <Link
                href={"/login"}
                className={"btn hover:text-green my-auto align-middle"}
              >
                {login}
              </Link>
              <Link
                href={"/signup"}
                className={
                  "hover:duration-300 hover:p-4 my-auto btn outline outline-2 outline-green hover:bg-green hover:text-white-500 hover:text-white"
                }
              >
                {signUp}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
