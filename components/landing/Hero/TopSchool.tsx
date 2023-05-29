import React from "react";
import Link from "next/link";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import SchoolCard from "@/components/School/SchoolCard";

const TopSchools = ({ topSchools }: { topSchools: Array<SchoolCardProps> }) => {
  return (
    <div
      id={"top-schools"}
      className={"flex flex-col lg:flex-row justify-between gap-10"}
    >
      <div className={"text-center m-auto [&>*]:m-10 w-full"}>
        <h1 className={"text-4xl font-bold"}>You can easily find all private schools here</h1>
        <Link
          className={
            "text-white bg-green p-4 rounded-xl w-40 m-auto duration-300 hover:shadow-[2px_2px_3px] hover:shadow-gray-800/40"
          }
          href={"/home"}
        >
          Browse Schools
        </Link>
      </div>
      {/* <div className={"flex flex-col gap-3 items-center w-full"}>
        {topSchools.map((school, index) => (
          <SchoolCard key={index} SchoolProps={school} />
        ))}
      </div> */}
    </div>
  );
};

export default TopSchools;
