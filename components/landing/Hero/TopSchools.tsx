import React from "react";
import Link from "next/link";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import SchoolCard from "@/components/School/SchoolCard";

const TopSchools = ({ topSchools }: { topSchools: Array<SchoolCardProps> }) => {
  return (
    <div
      id={"top-schools"}
      className={"flex flex-col lg:flex-row gap-10 justify-between"}
    >
      <div className={"text-center my-auto  [&>*]:m-10"}>
        <h1 className={"text-4xl font-bold"}>Top Rated Schools</h1>
        <Link
          className={
            "text-white bg-green p-4 rounded-xl w-40 m-auto duration-300 hover:shadow-[2px_2px_3px] hover:shadow-gray-800/40"
          }
          href={"#"}
        >
          Browse All
        </Link>
        <p>
          Lauren Ipsum Lauren Ipsum Lauren Ipsum Lauren IpsumLauren IpsumLauren
          Ipsum
        </p>
      </div>
      <div className={"flex flex-col gap-3 items-center"}>
        {topSchools.map((school) => (
          <SchoolCard key={school.schoolName} SchoolProps={school} />
        ))}
      </div>
    </div>
  );
};

export default TopSchools;
