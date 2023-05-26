import React, { MutableRefObject, useContext, useRef, useState } from "react";
import Image from "next/image";
import SearchImage from "@/public/search.svg";
import { SearchSubmitContext } from "@/pages/home";

const SearchBar = ({ search }: { search: MutableRefObject<any> }) => {
  let { submit, setSubmit } = useContext(SearchSubmitContext);

  let [searching, setSearching] = useState(false);

  const focus = () => setSearching(true);
  const unFocus = () => setSearching(false);
  return (
    <div
      className={
        searching
          ? "m-auto h-8 flex border-green border-2 rounded-3xl shadow-xl scale-105 duration-[1000ms] w-[70%]"
          : "m-auto h-8 flex border-green border-2 rounded-3xl hover:border-2 duration-300 w-[40%] "
      }
    >
      <button
        onClick={() => setSubmit(!submit)}
        className={"ml-2 p-2 flex-shrink-0 my-auto"}
      >
        <Image src={SearchImage.src} alt={"search"} width={15} height={7} />
      </button>
      <input
        ref={search}
        className={
          "mx-1 pl-1 outline-none w-full rounded-r-2xl bg-transparent p-2"
        }
        type={"search"}
        onBlur={unFocus}
        onFocus={focus}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setSubmit(!submit);
          }
        }}
        onClick={(e) => e.stopPropagation()}
        placeholder={"Search"}
      />
    </div>
  );
};

export default SearchBar;
