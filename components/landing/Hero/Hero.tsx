// @flow
import * as React from "react";
import TopSchools from "@/components/landing/Hero/TopSchool";
import schools from "@/components/landing/Hero/topSchools";

export default function Hero({ username }: { username?: string }) {
  return (
    <div className={"px-20 pb-52"}>
      <div
        id={"Hero"}
        className={"flex flex-col justify-around gap-10 text-dark-blue py-52"}
      >
        {username !== undefined && (
          <h1 className={"font-bold lg:text-8xl text-5xl text-center" + ""}>
            Welcome <span className={"text-green"}>{username}</span>
          </h1>
        )}
        <h1 className={"font-bold lg:text-8xl text-5xl text-center" + ""}>
          Find the best educators in Algeria
        </h1>
        <h2 className={"text-xl text-center"}>
          Our first of a kind platform joins you with best institutes, <br />
          schools and teachers in the country
        </h2>
      </div>
      <TopSchools topSchools={schools} />
    </div>
  );
}
