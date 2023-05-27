import React from "react";
import Image from "next/image";
import { CourseCardProps } from "@/interfaces/CourseCardProps";
import placeHolder from "@/public/placeHolder.png";
import { GiOpenBook, GiMoneyStack } from "react-icons/gi";
import { MdTitle } from "react-icons/md";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";

const CourseCard = ({
  courseCardProps: {
    SchoolName,
    CourseName,
    Module,
    TeacherName,
    Level,
    Year,
    Description,
    price,
  },
}: {
  courseCardProps: CourseCardProps;
}) => {
  return (
    <div className="relative flex flex-col items-start w-80 h-96 bg-dark-blue text-white border-2 rounded-xl overflow-hidden shadow-lg ">
      <Image
        className="w-full object-cover"
        src={placeHolder.src}
        alt="Course Image"
        width={350}
        height={200}
      />
      <div className="p-4">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <div className="flex items-center gap-2">
              <MdTitle />
              <p className="font-bold">{CourseName}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaChalkboardTeacher />
              <p>{TeacherName}</p>
            </div>
            <div className="mt-2">
              <p>{Level}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <div className="flex items-center gap-2">
              <GiOpenBook />
              <p>{Module}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaSchool />
              <p>{SchoolName}</p>
            </div>
            <div className="mt-2">
              <p>{Year}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="py-2 text-sm" id="course-description">
            {Description}
          </p>
          <div className="flex gap-3 mt-2 text-xl">
            <GiMoneyStack />
            <span>
              {price}
              <span className="text-xs ml-1">DZD</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
