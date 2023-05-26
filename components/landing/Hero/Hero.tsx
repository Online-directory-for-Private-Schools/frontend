// @flow
import * as React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={"px-20 pb-52"}>
      <div
        id={"Hero"}
        className={"flex flex-col justify-around gap-10 text-dark-blue py-52"}
      >
        <h1 className={"font-bold lg:text-8xl text-5xl text-center" + ""}>
          Find the best educators in Algeria
        </h1>
        <h2 className={"text-xl text-center"}>
          Our first of a kind platform joins you with best institutes, <br />
          schools and teachers in the country
        </h2>
      </div>
      <div className={"text-center m-auto [&>*]:m-10"}>
        <h1 className={"text-4xl font-bold"}>
          Click here to search for schools{" "}
        </h1>
        <Link
          className={
            "text-white bg-green p-4 rounded-xl w-40 m-auto duration-300 hover:shadow-[2px_2px_3px] hover:shadow-gray-800/40"
          }
          href={"/home"}
        >
          Browse All
        </Link>
      </div>
    </div>
  );
}
