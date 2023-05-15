import React from "react";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import { BiMap } from "react-icons/bi";
import TabBar from "../Home/TabBar";
import { Box, Modal, IconButton } from "@mui/material";
import { useState } from "react";
import { AiTwotoneStar, AiFillCloseCircle } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import Logo from "@/public/School_Logo.svg";
import SchoolCover from "@/public/school-cover.png"
import Link from "next/link";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { fontFamily } from "@mui/system";
import { red } from "@mui/material/colors";






import SchoolCard from './SchoolCard';

export const SchoolCardList = () => {
  const schools = [
    {
      schoolName: "School 1",
      schoolCity: "City 1",
      googleMapLocation: "Location 1",
      initialFavorite: false,
      rating: 4,
      description: "Lorem ipsum dolor sit amet",
    },
    {
      schoolName: "School 2",
      schoolCity: "City 2",
      googleMapLocation: "Location 2",
      initialFavorite: true,
      rating: 3,
      description: "Lorem ipsum dolor sit amet",
    },
    {
      schoolName: "School 3",
      schoolCity: "City 3",
      googleMapLocation: "Location 3",
      initialFavorite: false,
      rating: 5,
      description: "Lorem ipsum dolor sit amet",
    },
    {
      schoolName: "School 4",
      schoolCity: "City 4",
      googleMapLocation: "Location 4",
      initialFavorite: false,
      rating: 4,
      description: "Lorem ipsum dolor sit amet",
    },
    {
      schoolName: "School 5",
      schoolCity: "City 5",
      googleMapLocation: "Location 5",
      initialFavorite: false,
      rating: 4,
      description: "Lorem ipsum dolor sit amet"
    },
    {
      schoolName: "School 6",
      schoolCity: "City 6",
      googleMapLocation: "Location 6",
      initialFavorite: false,
      rating: 4,
      description: "Lorem ipsum dolor sit amet"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {schools.map((school, index) => (
      <div key={index} className="rounded-lg mb-8 overflow-hidden">
        <SchoolCard SchoolProps={school} />
      </div>
    ))}
  </div>
</div>

  );
};



import Button from '@mui/material/Button';


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
          <SchoolCardList />
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
    <div className="mt-12">

    <div className=" h-[650px] b w-[98vw] p-[50px] grid text-white grid-cols-[2fr,1fr] grid-rows-[1fr,120px,95px] gap-[20px] ">
      <div className="hero max-h-[300px] h-full items-start bg-dark-blue flex overflow-hidden  rounded-[15px] flex-col text-white justify-items-stretch  " style={{ gridRow: '1/2' }}>

        <div className="min-w-[100%] min-h-[45%] max-h-[55%]  bg-green overflow-hidden">
        <Image
            className={" m-auto  min-h-[100%] min-w-[100%] "}
            src={SchoolCover.src}
            width={500}
            height={100}
            alt="School"
          />
        </div>

        <div className="w-full flex lg:px-10 px-5 sm:p-0">
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
        <div className="flex p-10">
          desc desc desc desc desc desc desc 
        </div>
      </div>

      <div className="bg-dark-blue text-white p-[20px] h-full rounded-[10px]  " style={{ gridRow: '1/3' }}>
        <h2>map</h2>
      </div>

      <div className="bg-red-400 align -flex flex-col rounded-[15px]  ">
        <div className="w-full bg-blue-500">
            upper
        </div>      
        <div className="w-full bg-red-500">
          lower    
        </div>    
      
      
      </div>
    </div>
      <SchoolTab />
    </div>
  );
}

