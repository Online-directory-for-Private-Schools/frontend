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
          ? "flex border-green border rounded-3xl  border-2 shadow-xl scale-105"
          : "flex border-green border rounded-3xl  hover:border-2"
      }
    >
      <button className={"ml-2 p-2 flex-shrink-0 my-auto"}>
        <Image src={search.src} alt={"search"} width={20} height={10} />
      </button>
      <input
        className={
          "my-2 mx-1 pl-4 border-l border-grey-500 outline-none w-max rounded-r-2xl"
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
