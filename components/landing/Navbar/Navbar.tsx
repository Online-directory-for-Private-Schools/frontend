import * as React from "react";
import { MouseEventHandler, useState } from "react";
import Image from "next/image";
import { links } from "@/components/landing/Navbar/links";
import Link from "next/link";
import hamburger from "@/public/bars-solid.svg";
import closeIcon from "@/public/close.svg";
import SearchBar from "@/components/landing/Navbar/SearchBar";
import logo from "@/public/School_Logo.svg";
import logout from "@/public/logout.svg";
import { useRouter } from "next/router";

const cookieCutter = require("cookie-cutter");
interface NavbarProps {
  loggedIn?: boolean;
  style2?: boolean;
}

export default function Navbar({ loggedIn }: NavbarProps) {
  let [clicked, setClicked] = useState(false);

  const router = useRouter();
  const handleResize: EventListener = () => {
    if (window.screen.width >= 768 && clicked) {
      window.removeEventListener("resize", handleResize);
      setClicked(false);
    }
  };
  const handleScroll = () => {
    if (window.scrollY > 100 && !scrolled) {
      setScrolled(true);
      window.removeEventListener("scroll", handleScroll);
    } else if (window.scrollY <= 100 && scrolled) {
      setScrolled(false);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);

  const toggleLinks: MouseEventHandler = (event) => {
    event.stopPropagation();
    setClicked(!clicked);
  };

  const logoutHandler: MouseEventHandler = (e) => {
    e.stopPropagation();
    cookieCutter.set("token", "");
    router.push("/login");
  };

  const login: String = "login";
  const signUp: String = "Sign Up";

  let [scrolled, setScrolled] = useState(false);

  return (
    <div
      className={
        clicked
          ? "z-50 flex fixed flex-row justify-center w-[100%] h-[100%] bg-black/70"
          : "z-50 flex flex-row justify-center w-[100%] h-[100%]"
      }
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={
          scrolled
            ? "z-50 h-12 fixed  shadow flex flex-row justify-between w-[98%] mt-2 p-2 gap-2 bg-white rounded-2xl hover:shadow-md hover:-translate-y-[5px] transform duration-300"
            : "z-50 h-12 fixed bg-transparent flex flex-row justify-between w-[98%] mt-2 p-2 gap-2 rounded-2xl hover:-translate-y-[5px] transform duration-300"
        }
      >
        <div className={"w-[10%] lg:w-[25%] flex justify-left pl-2"}>
          <Image
            className={" hidden lg:block bg-dark-blue p-1 rounded-xl"}
            src={logo.src}
            alt={"logo"}
            width={200}
            height={36}
          />
          <Image
            className={"lg:hidden block cursor-pointer "}
            src={clicked ? closeIcon.src : hamburger.src}
            alt={"X"}
            width={20}
            height={15}
            onClick={toggleLinks}
          />
        </div>
        <ul
          className={"lg:flex flex-row justify-center gap-20 hidden lg:w-[50%]"}
        >
          {links.map((link, index) => (
            <li
              className={"link"}
              key={index}
              onClick={(e: any) => e.stopPropagation()}
            >
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
                  <Link
                    key={index}
                    href={link.route}
                    draggable={"false"}
                    onClick={(e: any) => e.stopPropagation()}
                  >
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
        {loggedIn ? (
          <div className={"flex flex-row justify-center w-full lg:w-[25%] "}>
            <SearchBar />
            <Image
              className={"p-1 rounded-xl cursor-pointer"}
              src={logout.src}
              alt={"logo"}
              width={35}
              height={20}
              onClick={logoutHandler}
            />
          </div>
        ) : (
          <div className="w-[25%] flex flex-row justify-end">
            <Link
              href={"/login"}
              onClick={(event) => event.stopPropagation()}
              className={"btn hover:text-green my-auto align-middle"}
            >
              {login}
            </Link>
            <Link
              href={"/signup"}
              className={
                "duration-300 hover:py-2 hover:mx-0 my-auto btn outline outline-2 outline-green hover:bg-green hover:text-white"
              }
              onClick={(event) => event.stopPropagation()}
            >
              {signUp}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
