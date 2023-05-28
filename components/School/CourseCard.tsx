import React from "react";
import Image from "next/image";
import { CourseCardProps } from "@/interfaces/CourseCardProps";
import placeHolder from "@/public/school-cover.png";
import { GiOpenBook, GiMoneyStack } from "react-icons/gi";
import { MdTitle } from "react-icons/md";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";
const CourseCard = ({
  courseCardProps: {
    SchoolName,
    title,
    Module,
    teacher_name,
    Level,
    Year,
    description,
    pricePerSession,
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
      <div className="p-[1rem]">
        <div className="flex justify-between px-[1rem] pt-0 pb-[1px] gap-[1rem]">
          <div className="[&>*]:p-3 w-[50%]">
            <div className={"flex gap-3"}>
              <MdTitle className={"m-auto w-1/4"} />
              <p className="course-name l w-3/4">{title}</p>
            </div>
            <div className={"flex gap-3"}>
              <FaChalkboardTeacher className={"m-auto w-1/4"} />
              <p className="teacher-name l w-3/4">{teacher_name}</p>
            </div>
            <div className={"flex gap-3 justify-center"}>
              <p className="level l">{Level}</p>
            </div>
          </div>
          <div className="[&>*]:p-3 w-[50%]">
            <div className={"flex gap-3"}>
              <GiOpenBook className={"m-auto w-1/4"} />
              <p className="module r w-3/4">{Module}</p>
            </div>
            <div className={"flex gap-3"}>
              <FaSchool className={"m-auto w-1/4"} />
              <p className="school-name w-3/4 r">{SchoolName}</p>
            </div>
            <div className={"flex justify-center gap-3"}>
              <p className="year r">{Year}</p>
            </div>
          </div>
        </div>

        <div className={"pb-8"}>
          <p className="py-3" id="course-description">
            {description}
          </p>
          <div className={"flex gap-3 absolute right-5 text-xl"}>
            <GiMoneyStack className={"m-auto w-1/4"} />
            <span className="w-3/4">
              {pricePerSession}
              <span className={"text-[10px]"}> DZD</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
