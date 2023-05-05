import React from "react";
import Image from "next/image";
import { CourseCardProps } from "@/interfaces/CourseCardProps";
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
  courseCard: CourseCardProps;
}) => {
  // const [favorite, setFavorite] = useState(initialFavorite);
  // const toggleFavorite = () => {
  //   setFavorite(!favorite);
  // };

  return (
    <div className="relative flex flex-col w-[350px] bg-dark-blue text-white border-2 rounded-xl ">
      <Image
        className="w-full h-[150px] "
        // src="https://via.placeholder.com/350x200"
        alt="Course Image"
        width={50}
        height={50}
      />
      <div className="p-[1rem]">
        <div className="flex justify-between px-[1rem] pt-0 pb-[1px] gap-[1rem]">
          <div className="[&>*]:p-3">
            <p className="course-name l">{CourseName}</p>
            <p className="teacher-name l">{TeacherName}</p>
            <p className="level l">{Level}</p>
          </div>
          <div className="[&>*]:p-3">
            <p className="module r">{Module}</p>
            <p className="school-name r">{SchoolName}</p>
            <p className="year r">{Year}</p>
          </div>
        </div>

        <div className="description price">
          <p className="description" id="course-description">
            {Description}
          </p>
          <span className="course-price">
            {price}
            <span className={"text-[10px]"}>DZD</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
