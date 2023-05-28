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
  let [mpriceMin, setMPriceMin] = useState(1000);
  let [mpriceMax, setMPriceMax] = useState(3000);

  let [spriceMin, setSPriceMin] = useState(500);
  let [spriceMax, setSPriceMax] = useState(1500);

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
        setProvince(e.target.value);
      },
    },
    {
      name: "City",
      value: city,
      onChange: (e: any) => setCityName(e.target.value),
    },
  ];

  const token = cookie.get("token");
  const schoolHandlerFactory = new HandlerFactory("search-school");
  const searchSchoolHandler = schoolHandlerFactory.createHandler({
    name: search,
    page: 1,
    cityId: city === "" ? undefined : city,
    countryId: country === "" ? undefined : country,
    provinceId: province === "" ? undefined : province,
    token: token,
  }) as HandleSchoolSearch;

  const CourseHandlerFactory = new HandlerFactory("search-course");
  const searchCourseHandler = CourseHandlerFactory.createHandler({
    title: search,
    page: 1,
    monthlyPriceEnd: mpriceMax,
    monthlyPriceStart: mpriceMin,
    pricePerSessionEnd: spriceMax,
    pricePerSessionStart: spriceMin,
    cityId: city === "" ? undefined : city,
    countryId: country === "" ? undefined : country,
    provinceId: province === "" ? undefined : province,
    token: token,
  }) as HandleSchoolSearch;

  let { submit, setSubmit } = useContext(SearchSubmitContext);

  useEffect(() => {
    if (!course) {
      searchSchoolHandler
        .execute()
        .then((res) => {
          if (res.error) setSchools({ available: true, array: [] });
          else setSchools({ available: true, array: res.res.data.schools });
        })
        .catch((e) => {
          console.error(e);
          setSchools({ available: true, array: [] });
        });
    } else {
      searchCourseHandler
        .execute()
        .then((res) => {
          if (res.error) {
            setCourses({ available: true, array: [] });
          } else setCourses({ available: true, array: res.res.data.courses });
        })
        .catch((e) => {
          console.error(e);
          setCourses({ available: true, array: [] });
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
            rating={{
              values: ratingArray,
              onChange: setRatingArray,
            }}
            address={address}
          />
        )}
        {course && (
          <CourseAccordion
            Mprices={{
              values: [mpriceMin, mpriceMax],
              onChange: [
                (e: any) => {
                  setSubmit(!submit);
                  setMPriceMin(e.target.value);
                },
                (e: any) => {
                  setSubmit(!submit);
                  setMPriceMax(e.target.value);
                },
              ],
            }}
            Sprices={{
              values: [spriceMin, spriceMax],
              onChange: [
                (e: any) => {
                  setSubmit(!submit);
                  setSPriceMin(e.target.value);
                },
                (e: any) => {
                  setSubmit(!submit);

                  setSPriceMax(e.target.value);
                },
              ],
            }}
            address={address}
          />
        )}
      </div>
      <div className="flex-1 w-full h-2 justify-center">
        <TabBar />
        <div
          className={
            "m-5 p-5 rounded-xl [&>*]:m-3 [&>*]:w-72 flex flex-row justify-items-center flex-wrap"
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
              <p className={"p-4 m-text-center text-xl font-bold"}>
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
