import React, { useState } from "react";
import SimpleAccordion from "./Accordeon/Accordeon";
import {AiFillFilter} from "react-icons/ai"
import TabBar from "./TabBar";
const createBooleanArray = (number: number): Array<boolean> => {
  let ratingArray: Array<boolean> = [];
  for (let i = 0; i < number; i++) ratingArray.push(false);
  return ratingArray;
};

export default function HomeScreenDashBoard({school}: {school:boolean}) {
  let [ratingArray, setRatingArray] = useState(createBooleanArray(6));
  let [primaryValues, setPrimaryValues] = useState(createBooleanArray(5));
  let [middleValues, setMiddleValues] = useState(createBooleanArray(4));
  let [secondaryValues, setSecondaryValues] = useState(createBooleanArray(3));

  let [course, setCourse] = useState(!school);

  return (
    <div className="mt-20 flex flex-row">
      <div className="flex flex-col w-[25%]">
        <div className="flex flex-row justify-between mx-4">
          <p className="p-4 pl-0 text-xl font-semibold">Filters</p>
          <AiFillFilter className="my-auto"/>
        </div>
        <hr className="h-2 w-full border-dark-blue" />
      </div>
      <div className={"sidebar w-[25%] h-full fixed overflow-y-scroll mt-20"}>
        <SimpleAccordion
          phases={[
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
          ]}
          rating={{
            values: ratingArray,
            onChange: setRatingArray,
          }}
        />
      </div>
      <div className="flex-1 w-full h-2">
        <TabBar course={course} setCourse={setCourse}/>
      </div>
    </div>
  );
}
