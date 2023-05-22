import React from "react";
import CourseCard from "./CourseCard";
import { AiTwotoneStar } from "react-icons/ai";
import Image from "next/image";
import Logo from "@/public/School_Logo.svg";
import SchoolCover from "@/public/school-cover.png";
import Link from "next/link";

import { BiMap } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

export const CourseCardList = ({
  courses,
}: {
  courses: Array<CourseCardProps>;
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="rounded-lg mb-8 overflow-hidden">
            <CourseCard courseCardProps={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

import { CourseCardProps } from "@/interfaces/CourseCardProps";
import { ISchoolResp } from "@/interfaces/ISchoolResp.interface";

export default function TabBarProfile({
  course,
  setCourse,
}: {
  course: boolean;
  setCourse: Function;
}) {
  const notSelectedLeft =
    "align-center font-bold text-2xl w-[50%] text-center  p-5 bg-cyan-600/20 rounded-l-[14px] opacity-75 hover:opacity-90 cursor-pointer";

  const notSelectedRight =
    "align-center font-bold text-2xl w-[50%] text-center  p-5 bg-cyan-600/20 rounded-r-[14px] opacity-75 hover:opacity-90 cursor-pointer";

  const selectedLeft =
    "align-center font-bold text-2xl  w-[50%] text-center transition-all duration-350  text-center transition-opacity duration-500 p-5 bg-green text-white rounded-l-[14px] cursor-pointer";
  const selectedRight =
    "align-center font-bold text-2xl  w-[50%] text-center transition-all duration-350 text-center transition-opacity duration-500 p-5 bg-green text-white rounded-r-[14px] cursor-pointer ]";
  return (
    <div className="flex flex-row justify-around  rounded-2x m-5">
      <div
        className={!course ? selectedLeft : notSelectedLeft}
        onClick={() => setCourse(false)}
      >
        Course
      </div>
      <div
        className={course ? selectedRight : notSelectedRight}
        onClick={() => setCourse(true)}
      >
        Gallery
      </div>
    </div>
  );
}

export function SchoolTab({ courses }: { courses: Array<CourseCardProps> }) {
  const [course, setCourse] = React.useState(false);

  return (
    <div>
      <TabBarProfile course={course} setCourse={setCourse} />
      {course ? (
        <div className="min-h-[25rem]">
          <p className={"p-5 m-20 text-4xl font-bold text-center"}>
            This feature is not available yet
          </p>
        </div>
      ) : (
        <div>
          {courses.length === 0 ? (
            <div className="min-h-[25rem]">
              <p className={"p-5 m-20 text-4xl font-bold text-center"}>
                No courses Provided by this school
              </p>
            </div>
          ) : (
            <CourseCardList courses={courses} />
          )}
        </div>
      )}
    </div>
  );
}

export const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <AiTwotoneStar
        key={`star-${i}`}
        className={`${i <= rating ? "fill-amber-500" : "fill-amber-100"}`}
      />
    );
  }
  return stars;
};

// Should have added a parameter to check the School

export function SchoolProfile({
  school,
  courses,
}: {
  school: ISchoolResp;
  courses: Array<CourseCardProps>;
}) {
  return (
    <div className="mt-[6rem] oveflow-hidden">
      <div className=" w-[97vw] px-[50px] md:grid text-white md:grid-cols-[2fr,1fr] md:grid-rows-[1fr,120px,95px] gap-[20px] flex-col flex">
        <div
          className="md:max-h-[300px] min-h-[300px] mh-full items-start bg-dark-blue flex overflow-hidden rounded-[15px] flex-col text-white justify-items-stretch  "
          style={{ gridRow: "1/2" }}
        >
          <div className="min-w-[100%] min-h-[45%] max-h-[55%]  bg-green overflow-hidden">
            <Image
              className={" m-auto  min-h-[100%] min-w-[100%] "}
              src={SchoolCover.src}
              width={500}
              height={100}
              alt="School"
            />
          </div>

          <div className="w-full flex lg:px-10 sm:px-5 p-3">
            <div className="w-[15%] ">
              <Image
                className={"w-fullh-full rounded-xl bg-gray-400"}
                src={Logo.src}
                width={200}
                height={100}
                alt="School"
              />
            </div>
            <div className="w-[85%] pl-7 pt-2">
              <h2 className="font-bold ">{school.name}</h2>
              <div className="pt-2 flex flex-row ">
                <div className="">
                  <Link
                    className="flex flex-row text-left justify-start"
                    href={`https://www.google.com/maps?q=${
                      school.lng + "," + school.lat
                    }`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiMap className="my-auto mr-2 fill-green scale-[115%] " />
                    <h2 className={"my-auto"}>{school.street.city.name}</h2>
                  </Link>
                </div>
                {/*<div className="flex bg-orange-500 flex-row justify-end ">
               <button
                className={"flex flex-row gap-2"}
                onClick=toggleFavorite
              >
                {!favorite ? (
                  <BsBookmark className=" my-auto fill-green" />
                ) : (
                  <BsBookmarkFill className="my-auto fill-green" />
                )}
                <p className={"text-sm my-auto"}>Add to favourites</p>
              </button> 
            </div> */}
                {/*<div className="flex flex-row justify-start m-auto flex items-center ">*/}
                {/*  {renderStars(5)} <span className="">(x ratings)</span>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className="flex w-full h-full lg:px-10 sm:px-5  p-3">
            {school.bio}
          </div>
        </div>

        <div
          className="bg-dark-blue text-white p-[20px] rounded-[10px] flex md:h-auto h-[300px] "
          style={{ gridRow: "1/3" }}
        >
          <h2 className="m-auto italic">Feature not implemented</h2>
        </div>

        <div className="bg-dark-blue flex flex-col rounded-[15px] items-center justify-center overflow-hidden md:h-auto h-[250px] ">
          <div className="w-full flex items-center md:h-1/2 h-3/4 md:justify-around md:flex-row flex-col">
            <div className="flex flex-row my-auto">
              <BsFillTelephoneFill className="fill-green scale-[120%] m-auto " />
              <span className="px-2">missing</span>
            </div>
            <div className=" md:w-[1px] w-[70%] bg-white md:h-[70%] h-[1px] "></div>

            <div className="flex flex-row my-auto ">
              <MdEmail className="fill-green scale-[120%] m-auto " />
              <span className="px-2">missing</span>
            </div>
            <div className=" md:w-[1px] w-[80%] bg-white md:h-[70%] h-[1px] "></div>

            <div className="flex flex-row my-auto">
              <AiOutlineGlobal className="fill-green scale-[120%] m-auto " />
              <span className="px-2">website</span>
            </div>
          </div>

          <div className=" h-[1px] bg-white w-[85%] "></div>

          <div className="w-full flex justify-center items-center h-1/4 md:h-1/2 m-auto">
            <div className="flex flex-row my-auto">
              <FaMapMarkedAlt className="fill-green scale-[120%] m-auto " />
              <span className=" px-2">{school.street.name}</span>
            </div>
          </div>
        </div>
      </div>
      <SchoolTab courses={courses} />
    </div>
  );
}
