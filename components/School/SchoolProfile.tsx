import React from "react";
import CourseCard from "./CourseCard";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import TabBar from "../Home/TabBar";
import { Box, Modal, IconButton } from "@mui/material";
import { useState } from "react";
import { AiTwotoneStar, AiFillCloseCircle } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import Logo from "@/public/School_Logo.svg";
import SchoolCover from "@/public/school-cover.png"
import Link from "next/link";



import { BiMap } from "react-icons/bi";
import { AiOutlineGlobal  } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FaMapMarkedAlt } from "react-icons/fa"




import SchoolCard from './SchoolCard';

export const CourseCardList = () => {
  const courses:Array<CourseCardProps> = [
    {
      SchoolName: "GHI School",
      CourseName: "Photography",
      Module: "Lighting and Composition",
      TeacherName: "Michael Anderson",
      Level: "Beginner",
      Year: "2023",
      Description: "Master the art of capturing stunning photographs with proper lighting and composition techniques.",
      price: 89.99
    },
    {
      SchoolName: "DEF Academy",
      CourseName: "Graphic Design",
      Module: "Digital Illustration",
      TeacherName: "Emily Davis",
      Level: "Intermediate",
      Year: "2023",
      Description: "Learn digital illustration techniques using industry-standard software.",
      price: 129.99
    },
    {
      SchoolName: "PQR College",
      CourseName: "Business Management",
      Module: "Leadership and Organizational Behavior",
      TeacherName: "Robert Thompson",
      Level: "Advanced",
      Year: "2023",
      Description: "Develop skills in managing teams and leading organizations.",
      price: 199.99
    },
    {
      SchoolName: "XYZ Institute",
      CourseName: "Advanced Mathematics",
      Module: "Calculus and Differential Equations",
      TeacherName: "Sarah Johnson",
      Level: "Intermediate",
      Year: "2023",
      Description: "Explore advanced mathematical concepts and their applications.",
      price: 149.99
    },
    {
      SchoolName: "ABC University",
      CourseName: "Introduction to Computer Science",
      Module: "Fundamentals of Programming",
      TeacherName: "John Smith",
      Level: "Beginner",
      Year: "2023",
      Description: "Learn the basics of computer programming and problem-solving.",
      price: 99.99
    }                
    
  ];

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



import Button from '@mui/material/Button';
import { CourseCardProps } from "@/interfaces/CourseCardProps";


export default function TabBarProfile({ course, setCourse }: { course: boolean, setCourse: Function }) {

  const notSelectedLeft =
    "align-center font-bold text-2xl w-[50%] text-center  p-5 bg-cyan-600/20 rounded-l-[14px] opacity-75 hover:opacity-90 cursor-pointer";

  const notSelectedRight =
    "align-center font-bold text-2xl w-[50%] text-center  p-5 bg-cyan-600/20 rounded-r-[14px] opacity-75 hover:opacity-90 cursor-pointer";
    
  const selectedLeft =
    "align-center font-bold text-2xl  w-[50%] md:w-[65%] text-center transition-all duration-350  text-center transition-opacity duration-500 p-5 bg-green text-white rounded-l-[14px] cursor-pointer";
  const selectedRight =
    "align-center font-bold text-2xl  w-[50%] md:w-[65%] text-center transition-all duration-350 text-center transition-opacity duration-500 p-5 bg-green text-white rounded-r-[14px] cursor-pointer ]";
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



 export function SchoolTab() {
  const [course, setCourse] = React.useState(false);

  return (
    <div>
      <TabBarProfile course={course} setCourse={setCourse} />
      {course ? (
        <div className="min-h-[25rem]">
          <h1>Gallery</h1>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2021%2F07%2F12%2Fbriefing%2Fremote-learning-covid.html&psig=AOvVaw0uX9NhT0zYEuGijFFFwUtv&ust=1682875148586000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLD4sM3Mz_4CFQAAAAAdAAAAABAE" alt="" />
        </div>
      ) : (
        <div>
          <Button>Edit Course</Button>
          <CourseCardList />
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


export function SchoolProfile() {
  return (
    <div className="mt-[6rem] oveflow-hidden">

    <div className=" w-[97vw] px-[50px] md:grid text-white md:grid-cols-[2fr,1fr] md:grid-rows-[1fr,120px,95px] gap-[20px] flex-col flex">

      <div className="md:max-h-[300px] min-h-[300px] mh-full items-start bg-dark-blue flex overflow-hidden rounded-[15px] flex-col text-white justify-items-stretch  " style={{ gridRow: '1/2' }}>

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
          <h2 className="font-bold ">schoolName</h2>
          <div className="pt-2 flex flex-row ">
            <div className="">
              <Link
                className="flex flex-row text-left justify-start"
                href={`https://www.google.com/maps?q=$`}
                target="_blank"
                rel="noreferrer"
              >
                <BiMap className="my-auto mr-2 fill-green scale-[115%] " />
                <h2 className={"my-auto"}>schoolCity</h2>
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
            <div className="flex flex-row justify-start m-auto flex items-center ">
              {renderStars(5)} <span className="">(x ratings)</span>
            </div>
          </div>
          </div>
        </div> 
        <div className="flex w-full h-full lg:px-10 sm:px-5  p-3">
          desc desc desc desc desc desc desc 
        </div>
      </div>

      <div className="bg-dark-blue text-white p-[20px] rounded-[10px] flex md:h-auto h-[300px] " style={{ gridRow: '1/3' }}>
        <h2 className="m-auto italic">map</h2>
      </div>

      <div className="bg-dark-blue flex flex-col rounded-[15px] items-center justify-center overflow-hidden md:h-auto h-[250px] ">

        <div className="w-full flex items-center md:h-1/2 h-3/4 md:justify-around md:flex-row flex-col">

            <div className="flex flex-row my-auto">
              <BsFillTelephoneFill className="fill-green scale-[120%] m-auto " />
              <span className="px-2">+213 555 66 77 88</span>
            </div>
            <div className=" md:w-[1px] w-[70%] bg-white md:h-[70%] h-[1px] "></div>

            <div className="flex flex-row my-auto ">
              <MdEmail className="fill-green scale-[120%] m-auto " />
              <span className="px-2">school@email.com</span>
            </div>
            <div className=" md:w-[1px] w-[80%] bg-white md:h-[70%] h-[1px] "></div>

            <div className="flex flex-row my-auto">
              <AiOutlineGlobal className="fill-green scale-[120%] m-auto "/>
              <span className="px-2">school.website.com</span>
            </div>
            
        </div>    

        <div className=" h-[1px] bg-white w-[85%] "></div>  
        
        <div className="w-full flex justify-center items-center h-1/4 md:h-1/2 m-auto">
        <div className="flex flex-row my-auto">
              <FaMapMarkedAlt className="fill-green scale-[120%] m-auto "/>
              <span className=" px-2">school adress street city zipcode</span>
            </div>   
        </div>    
      
      
      </div>
    </div>
      <SchoolTab /> 
    </div>
  );
}

