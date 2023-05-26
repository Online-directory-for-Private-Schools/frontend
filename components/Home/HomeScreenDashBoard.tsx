import React, { useContext, useEffect, useState } from "react";
import { AiFillFilter } from "react-icons/ai";
import TabBar from "./TabBar";
import SchoolCard from "@/components/School/SchoolCard";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import { CourseCardProps } from "@/interfaces/CourseCardProps";
import CourseCard from "@/components/School/CourseCard";
import CourseAccordion from "@/components/Home/Accordeon/CourseAccordion";
import SchoolAccordion from "@/components/Home/Accordeon/SchoolAccordion";
import Spinner from "@/components/Utils/Spinner";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { HandleSchoolSearch } from "@/requestHandlers/handleSchoolSearch";
import cookie from "js-cookie";
import { SearchSubmitContext } from "@/pages/home";
const createBooleanArray = (number: number): Array<boolean> => {
  let ratingArray: Array<boolean> = [];
  for (let i = 0; i < number; i++) ratingArray.push(false);
  return ratingArray;
};

export default function HomeScreenDashBoard({
  search,
  course,
}: // courses,
{
  search: string;
  course: boolean;
}) {
  let [courses, setCourses] = useState({ available: false, array: [] });
  let [schools, setSchools] = useState({ available: false, array: [] });

  let [ratingArray, setRatingArray] = useState(createBooleanArray(6));
  let [priceArray, setPriceArray] = useState(createBooleanArray(5));
  let [primaryValues, setPrimaryValues] = useState(createBooleanArray(5));
  let [middleValues, setMiddleValues] = useState(createBooleanArray(4));
  let [secondaryValues, setSecondaryValues] = useState(createBooleanArray(3));

  let [country, setCountry] = useState("");
  let [province, setProvince] = useState("");
  let [city, setCityName] = useState("");

  const address = [
    {
      name: "Country",
      value: country,
      onChange: (e: any) => setCountry(e.target.value),
    },
    {
      name: "Province",
      value: province,
      onChange: (e: any) => {
        console.log(e.target.value);
        setProvince(e.target.value);
      },
    },
    {
      name: "City",
      value: city,
      onChange: (e: any) => setCityName(e.target.value),
    },
  ];

  const phases = [
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
      onChange: setMiddleValues,
    },
    {
      name: "Secondary",
      number: 3,
      values: secondaryValues,
      onChange: setSecondaryValues,
    },
  ];
  const token = cookie.get("token");
  const schoolHandlerFactory = new HandlerFactory("search-school");
  const searchSchoolHandler = schoolHandlerFactory.createHandler({
    name: search,
    cityId: city === "" ? undefined : city,
    countryId: country === "" ? undefined : country,
    provinceId: province === "" ? undefined : province,
    token: token,
  }) as HandleSchoolSearch;

  const CourseHandlerFactory = new HandlerFactory("search-course");
  const searchCourseHandler = CourseHandlerFactory.createHandler({
    title: search,
    cityId: city === "" ? undefined : city,
    countryId: country === "" ? undefined : country,
    provinceId: province === "" ? undefined : province,
    token: token,
  }) as HandleSchoolSearch;

  let { submit } = useContext(SearchSubmitContext);

  useEffect(() => {
    if (!course) {
      searchSchoolHandler
        .execute()
        .then((res) => {
          setSchools({ available: true, array: res.res.data.schools });
        })
        .catch((e) => {
          console.error(e);
          setSchools({ available: false, array: [] });
        });
    } else {
      searchCourseHandler
        .execute()
        .then((res) => {
          setCourses({ available: true, array: res.res.data.courses });
        })
        .catch((e) => {
          console.error(e);

          setCourses({ available: false, array: [] });
        });
      // eslint-disable-next-line
    }
  }, [course, submit]);
  return (
    <div className="pt-20 flex flex-row">
      <div className="flex flex-col w-[25%] ">
        <div className={"fixed  w-[25%]"}>
          <div className="flex flex-row justify-between mx-4 ">
            <p className="p-4 pl-0 text-xl font-semibold">Filters</p>
            <AiFillFilter className="my-auto" />
          </div>
          <hr className="h-2 w-full border-dark-blue" />
        </div>
      </div>
      <div className={"sidebar w-[25%] h-full fixed overflow-y-scroll mt-20"}>
        {!course && (
          <SchoolAccordion
            phases={phases}
            rating={{
              values: ratingArray,
              onChange: setRatingArray,
            }}
            address={address}
          />
        )}
        {course && (
          <CourseAccordion
            phases={phases}
            prices={{
              values: priceArray,
              onChange: setPriceArray,
            }}
            address={address}
          />
        )}
      </div>
      <div className="flex-1 w-full h-2 justify-center">
        <TabBar />
        <div
          className={
            "m-5 p-5 rounded-xl [&>*]:m-3 flex flex-col justify-items-center flex-wrap"
          }
        >
          {((!courses.available && course) ||
            (!schools.available && !course)) && <Spinner />}
          {!course &&
            schools.available &&
            (schools.array.length === 0 ? (
              <p className={"p-4 text-center text-xl font-bold"}>
                No matching Schools
              </p>
            ) : (
              schools.array.map((School: SchoolCardProps, index) => (
                <div key={index} className={"m-auto"}>
                  <SchoolCard SchoolProps={School} />
                </div>
              ))
            ))}
          {course &&
            courses.available &&
            (courses.array.length === 0 ? (
              <p className={"p-4 text-center text-xl font-bold"}>
                No matching Courses
              </p>
            ) : (
              courses.array.map((Course: CourseCardProps, index: number) => (
                <CourseCard key={index} courseCardProps={Course} />
              ))
            ))}
        </div>
      </div>
    </div>
  );
}
