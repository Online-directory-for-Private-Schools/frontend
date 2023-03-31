import React from 'react';
import Image from "next/image";
import search from "@/public/search.svg";

const SearchBar = () => {
    return (
        <div className={"flex border-green border rounded-3xl"}>
            <button className={"ml-2 p-2 flex-shrink-0 my-auto"}>
                <Image src={search.src} alt={"search"} width={20} height={10} />
            </button>
            <input className={"my-2 mx-1 pl-4 border-l border-grey-500 outline-none w-max"} type={"search"} placeholder={"Search"}/>
        </div>
    );
};

export default SearchBar;