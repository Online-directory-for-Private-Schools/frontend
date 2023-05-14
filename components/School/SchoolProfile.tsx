import React from "react";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import Image from "next/image";






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




// Should have added a parameter to check the School


export function SchoolProfile() {
  return (
    <>
      <div className="hero">
        <div className="SchoolMain">
          <Image 
          src={"/chalal.jpg"}
          alt="Hi"
          width={10}
          height={10}
          /> 

          
          <h1>School Name</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            ullam quasi facilis quam necessitatibus, esse debitis, nihil ad
            dignissimos similique porro sunt deserunt voluptate eveniet nisi cum.
            Eius, distinctio similique.
          </div>
        </div>
        <div className="add-to-favorite">Add to favorite</div>
      </div>

      <div className="map">
        <h2>map</h2>
      </div>

      <div className="info">
        <h2>Contact Info</h2>
        <p>Phone Number: 123-456-7890</p>
        <p>Email: info@schoolname.com</p>
      </div>
      <SchoolTab />
    </>
  );
}

