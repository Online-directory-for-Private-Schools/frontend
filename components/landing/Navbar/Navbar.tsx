import * as React from "react";
import { MouseEventHandler, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import hamburger from "@/public/bars-solid.svg";
import closeIcon from "@/public/close.svg";
import SearchBar from "@/components/landing/Navbar/SearchBar";
import logo from "@/public/School_Logo.svg";
import { useRouter } from "next/router";

const cookieCutter = require("cookie-cutter");

export default function Navbar({
  home,
  landing,
  loggedIn,
  links,
}: {
  home?: boolean;
  landing?: boolean;
  loggedIn?: boolean;
  links?: Array<{ title: string; route: string }>;
}) {
  let [clicked, setClicked] = useState(false);
  let [profileMenu, setProfileMenu] = useState(false);
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
    router.push("/login").catch((e) => console.error(e));
  };

  const login: String = "login";
  const signUp: String = "Sign Up";
  const Profile: String = "Edit Profile";
  const logout: String = "logout";

  let [scrolled, setScrolled] = useState(false);

  const Redirect = () => {
    router.push(landing ? "/home" : "/").catch((e) => console.error(e));
  };
  return (
    <div
      className={
        clicked
          ? "z-50 flex fixed flex-row justify-center w-[100%] h-[100%] bg-black/70"
          : "z-50 flex flex-row justify-center w-[100%] h-[100%]"
      }
      onClick={() => setClicked(false)}
    >
      <div
        className={
          scrolled
            ? "z-50 h-12 fixed  shadow flex flex-row justify-between w-[98%] mt-2 p-2 gap-2 bg-white rounded-2xl hover:shadow-md transform duration-300 whitespace-nowrap"
            : "z-50 h-12 fixed bg-transparent flex flex-row justify-between w-[98%] mt-2 p-2 gap-2 rounded-2xl  transform duration-300 whitespace-nowrap"
        }
      >
        <div className={"w-[10%] lg:w-[25%] flex justify-left pl-2"}>
          <Image
            className={
              "cursor-pointers hidden lg:block bg-dark-blue p-1 rounded-xl"
            }
            src={logo.src}
            alt={"logo"}
            width={200}
            height={36}
            onClick={Redirect}
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
          {!!links &&
            links.map((link, index) => (
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
                {!!links &&
                  links.map((link, index) => (
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
          <div
            className={"flex flex-row gap-2 justify-center w-full lg:w-[25%] "}
          >
            <SearchBar />
            <div className={"flex flex-col"}>
              <div className={"flex flex-col items-center"}>
                <button
                  className={
                    "duration-300 hover:py-2 hover:mx-0 btn h-8 outline outline-2 outline-green hover:bg-green hover:text-white flex flex-col justify-center"
                  }
                  onClick={() => setProfileMenu(!profileMenu)}
                >
                  <p className={""}>Profile</p>
                </button>
              </div>

              <div
                className={
                  profileMenu
                    ? "relative p-2 mt-2 bg-white border-2 border-green rounded-xl [&>*]:m-auto"
                    : "invisible p-2 mt-2 bg-white border-2 border-green rounded-xl [&>*]:m-auto"
                }
              >
                <button
                  className={
                    "btn hover:text-green flex flex-col justify-center whitespace-nowrap"
                  }
                  onClick={logoutHandler}
                >
                  {logout}
                </button>
                <Link
                  href={"/profileedit"}
                  className={
                    "btn hover:text-green flex flex-col justify-center"
                  }
                  onClick={(event) => event.stopPropagation()}
                >
                  <p className="my-auto whitespace-nowrap">{Profile}</p>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[25%] flex flex-row justify-end">
            <Link
              href={"/login"}
              onClick={(event) => event.stopPropagation()}
              className={"btn hover:text-green flex flex-col justify-center"}
            >
              <p>{login}</p>
            </Link>
            <Link
              href={"/signup"}
              className={
                "duration-300 hover:py-2 hover:mx-0 btn outline outline-2 outline-green hover:bg-green hover:text-white flex flex-col justify-center"
              }
              onClick={(event) => event.stopPropagation()}
            >
              <p className="my-auto">{signUp}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
