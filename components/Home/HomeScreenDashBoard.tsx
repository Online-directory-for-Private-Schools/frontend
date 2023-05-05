import React, { useState } from "react";
import { AiFillFilter } from "react-icons/ai";
import TabBar from "./TabBar";
import SchoolAccordion from "./Accordeon/SchoolAccordion";
import CourseAccordion from "@/components/Home/Accordeon/CourseAccordion";
import SchoolCard from "@/components/School/SchoolCard";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
const createBooleanArray = (number: number): Array<boolean> => {
  let ratingArray: Array<boolean> = [];
  for (let i = 0; i < number; i++) ratingArray.push(false);
  return ratingArray;
};

export default function HomeScreenDashBoard({
  schools,
}: // courses,
{
  schools?: Array<SchoolCardProps>;
  // courses?: Array<CoursCardProps>;
}) {
  let [ratingArray, setRatingArray] = useState(createBooleanArray(6));
  let [priceArray, setPriceArray] = useState(createBooleanArray(5));
  let [primaryValues, setPrimaryValues] = useState(createBooleanArray(5));
  let [middleValues, setMiddleValues] = useState(createBooleanArray(4));
  let [secondaryValues, setSecondaryValues] = useState(createBooleanArray(3));

  let [course, setCourse] = useState(false);

  const phases = [
    {
      name: "Primary",
      number: 5,
      values: primaryValues,
      onChange: setPrimaryValues,
    },
    {
      name: "Middle",
      number: 4,
      values: middleValues,
      onChange: setMiddleValues,
    },
    {
      name: "Secondary",
      number: 3,
      values: secondaryValues,
      onChange: setSecondaryValues,
    },
  ];
  return (
    <div className="pt-20 flex flex-row">
      <div className="flex flex-col w-[25%] ">
        <div className="flex flex-row justify-between mx-4">
          <p className="p-4 pl-0 text-xl font-semibold">Filters</p>
          <AiFillFilter className="my-auto" />
        </div>
        <hr className="h-2 w-full border-dark-blue" />
      </div>
      <div className={"sidebar w-[25%] h-full fixed overflow-y-scroll mt-20"}>
        {!course && (
          <SchoolAccordion
            phases={phases}
            rating={{
              values: ratingArray,
              onChange: setRatingArray,
            }}
          />
        )}
        {course && (
          <CourseAccordion
            phases={phases}
            prices={{
              values: priceArray,
              onChange: setPriceArray,
            }}
          />
        )}
      </div>
      <div className="flex-1 w-full h-2 justify-center">
        <TabBar course={course} setCourse={setCourse} />
        <div className={"m-5 p-5 rounded-xl [&>*]:m-3 [&>*]:mx-auto"}>
          {!course &&
            schools!.map((School) => (
              <SchoolCard key={School.schoolName} SchoolProps={School} />
            ))}
          {/*{course &&*/}
          {/*  courses!.map((Course) => (*/}
          {/*    <SchoolCard key={School.schoolName} SchoolProps={School} />*/}
          {/*  ))}*/}
        </div>
      </div>
    </div>
  );
}
