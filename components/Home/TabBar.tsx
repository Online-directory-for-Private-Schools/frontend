import React, { useContext } from "react";
import { CourseContext } from "@/pages/home";

export default function TabBar() {
  const { course, setCourse } = useContext(CourseContext);
  const notSelectedLeft =
    "align-center font-bold text-2xl w-[50%] text-center  p-5 bg-cyan-600/20 rounded-l-[14px] cursor-pointer";

  const notSelectedRight =
    "align-center font-bold text-2xl w-[50%] text-center  p-5 bg-cyan-600/20 rounded-r-[14px] cursor-pointer";

  const selectedLeft =
    "align-center font-bold text-2xl w-[50%] text-center  p-5 bg-green text-white rounded-l-[14px] cursor-pointer";
  const selectedRight =
    "align-center font-bold text-2xl w-[50%] text-center  p-5 bg-green text-white rounded-r-[14px] cursor-pointer";
  return (
    <div className="flex flex-row justify-around  rounded-2x m-5">
      <div
        className={!course ? selectedLeft : notSelectedLeft}
        onClick={() => setCourse(false)}
      >
        School
      </div>
      <div
        className={course ? selectedRight : notSelectedRight}
        onClick={() => setCourse(true)}
      >
        Course
      </div>
    </div>
  );
}
