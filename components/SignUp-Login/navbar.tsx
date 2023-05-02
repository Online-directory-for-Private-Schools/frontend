import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/School_Logo.svg";
import { useRouter } from "next/router";


export default function Navbar({
  SignUp,
  Login,
  changePassword
}: {
  SignUp?: boolean;
  Login?: boolean;
  changePassword?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="flex justify-center ">
      <div
        className={
          "z-50 h-12 bg-transparent flex flex-row justify-between w-[98%] mt-2 p-2 gap-2 rounded-2xl"
        }
      >
        <div className={"w-[10%] lg:w-[25%] flex justify-left pl-2"}>
          <Image
            className={
              " hidden lg:block bg-dark-blue p-1 cursor-pointer rounded-xl"
            }
            src={logo.src}
            alt={"logo"}
            width={200}
            height={36}
            onClick={() => router.push("/")}
          />
        </div>

        <div className={"flex flex-row justify-end w-full "}>
          {!!SignUp && (
            <div className={"font-bold text-xl"}>
              Already a member ?
              <Link href="/login">
                <span
                  className={
                    "mx-1 hover:p-2 text-green hover:bg-green hover:text-white duration-300 rounded-xl"
                  }
                >
                  Login
                </span>
              </Link>
              instead{" "}
            </div>
          )}
          {!!changePassword && (
            <div className={"font-bold text-xl"}>
             Return to
              <Link href="/home">
                <span
                  className={
                    "mx-1 hover:p-2 text-green hover:bg-green hover:text-white duration-300 rounded-xl"
                  }
                >
                  Home
                </span>
              </Link>
              page
            </div>
          )}
          {!!Login && (
            <div className={"font-bold text-xl"}>
              New here ?
              <Link href="/signup">
                <span
                  className={
                    "mx-1 hover:p-2 text-green hover:bg-green hover:text-white duration-300 rounded-xl"
                  }
                >
                  {" "}
                  Sign Up{" "}
                </span>
              </Link>
              instead
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
