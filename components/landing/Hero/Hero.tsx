// @flow
import * as React from "react";

export function Hero() {
  return (
    <div className={"flex flex-col justify-around gap-10 py-52 text-dark-blue"}>
      <h1 className={"font-bold lg:text-8xl text-5xl text-center" + ""}>
        Find the best educators in Algeria
      </h1>
      <h2 className={"text-xl text-center"}>
        Our first of a kind platform joins you with best institutes, <br />
        schools and teachers in the country
      </h2>
    </div>
  );
}
