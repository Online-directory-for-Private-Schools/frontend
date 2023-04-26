import React, { useState } from "react";
import SimpleAccordion from "./Accordeon/Accordeon";

const createBooleanArray = (number: number): Array<boolean> => {
  let ratingArray: Array<boolean> = [];
  for (let i = 0; i < number; i++) ratingArray.push(false);
  return ratingArray;
};

export default function HomeScreenDashBoard() {
  let [ratingArray, setRatingArray] = useState(createBooleanArray(6));
  let [primaryValues, setPrimaryValues] = useState(createBooleanArray(5));
  let [middleValues, setMiddleValues] = useState(createBooleanArray(4));
  let [secondaryValues, setSecondaryValues] = useState(createBooleanArray(3));

  return (
    <div className="mt-20 flex flex-row">
      <div className={"sidebar w-[25%] h-full fixed overflow-y-scroll mt-20"}>
        <p className="p-4 text-xl font-semibold">Filters</p>
        <hr className="h-2 border-dark-blue" />
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
              onChange:setMiddleValues,
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
      <div className="flex-1 w-full h-2"></div>
    </div>
  );
}
