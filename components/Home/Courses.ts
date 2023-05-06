import { SchoolCardProps } from "@/interfaces/SchoolCard";
import CourseCard from "@/components/School/CourseCard";
import { CourseCardProps } from "@/interfaces/CourseCardProps";

const courses: Array<CourseCardProps> = [
  {
    SchoolName: "School",
    CourseName: "test1",
    Module: "Maths",
    TeacherName: "Test",
    Level: "Primary",
    Year: "Grade 1",
    Description: "This is the course description",
    price: 123,
  },
];

export default courses;
