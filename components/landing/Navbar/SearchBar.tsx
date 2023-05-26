import React, { useState } from "react";
import Image from "next/image";
import search from "@/public/search.svg";

const SearchBar = () => {
  let [searching, setSearch] = useState(false);

  const focus = () => setSearch(true);
  const unFocus = () => setSearch(false);

  return (
    <div
      className={
        searching
          ? "m-auto h-8 flex border-green border-2 rounded-3xl shadow-xl scale-105 duration-[1000ms] w-[70%]"
          : "m-auto h-8 flex border-green border-2 rounded-3xl hover:border-2 duration-300 w-[40%] "
      }
    >
      <button className={"ml-2 p-2 flex-shrink-0 my-auto"}>
        <Image src={search.src} alt={"search"} width={15} height={7} />
      </button>
      <input
        className={
          "mx-1 pl-1 outline-none w-full rounded-r-2xl bg-transparent p-2"
        }
        type={"search"}
        onBlur={unFocus}
        onFocus={focus}
        onClick={(e) => e.stopPropagation()}
        placeholder={"Search"}
      />
    </div>
  );
};

export default SearchBar;
