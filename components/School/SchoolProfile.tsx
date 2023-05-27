import React, { ChangeEventHandler, useState } from "react";
import CourseCard from "./CourseCard";
import { AiTwotoneStar, AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Logo from "@/public/School_Logo.svg";
import SchoolCover from "@/public/school-cover.png";
import Link from "next/link";
import { Modal, Box, IconButton } from "@mui/material";
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
// import jwt from "jsonwebtoken";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { HandleEditSchoolProfile } from "@/requestHandlers/HandleEditSchoolProfile";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import SelectLocation from "@/components/SignUp-Login/SelectLocation";
import Spinner from "@/components/Utils/Spinner";

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
  isOwner,
  school,
  courses,
}: {
  isOwner: boolean;
  school: ISchoolResp;
  courses: Array<CourseCardProps>;
}) {
  let [errorMessage, setErrorMessage] = useState("");
  let [spinner, setSpinner] = useState(false);

  let [successMessage, setSuccess] = useState("");

  let [open, setOpen] = useState(false);
  const [cookie, setUserToken] = useCookies(["token"]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setSuccess("");
    setErrorMessage("");
    setOpen(false);
  };

  const style = {
    overflow: "hidden",
    color: "dark-blue",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -70%)",
    width: 650,
    bgcolor: "rgba(255,255,255,0.7)",
    borderRadius: "25px",
    maxHeight: "90vh",
    minHeight: "50vh",
    margin: 0,
    paddingBottom: "25px",
    backdropFilter: "blur(6px)",
    "&:focus": { outline: "none" },
    display: "flex",
    flexDirection: "column",
    backgroundImage:
      "linear-gradient(to bottom right, rgba(07, 16, 59, 0.8), rgba(07, 16, 59, 1))",
  };

  //initialize parameters to old values
  const [schoolName, setSchoolName] = useState(school.name);
  const [schoolBio, setSchoolBio] = useState(school.bio);
  const [website, setWebsite] = useState(school.website);
  const [phoneNumber, setPhoneNumber] = useState(school.phone_number);
  const [schoolEmail, setSchoolEmail] = useState(school.email);
  const [isHiring, setIsHiring] = useState(school.isHiring);
  const [city, setCity] = useState(school.street.city.id);
  // @ts-ignore
  const [province, setProvince] = useState(school.street.city.province.id);
  // @ts-ignore
  const [country, setCountry] = useState(
    school.street.city.province.country.id
  );

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
      onChange: (e: any) => setCity(e.target.value),
    },
  ];
  const handleSubmit = async (e: any, id: string) => {
    e.preventDefault();
    setSpinner(true);
    const handlerFactory = new HandlerFactory("edit-school");
    console.log(city);
    const schoolRegisterHandler = handlerFactory.createHandler({
      name: schoolName,
      bio: schoolBio,
      isHiring: isHiring,
      cityId: city,
      website: website,
      phone_number: phoneNumber,
      email: schoolEmail,
      // lat: this.lat,
      // lng: this.lng,
      token: cookie.token,
      id: id,
    }) as HandleEditSchoolProfile;

    await schoolRegisterHandler.execute({
      setErrorMessage,
      setSuccess,
      setSpinner,
    });
  };

  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="mt-[6rem] oveflow-hidden">
      <div className=" w-[97vw] px-[50px] md:grid text-white md:grid-cols-[2fr,1fr] md:grid-rows-[1fr,120px,95px] gap-[20px] flex-col flex">
        <div
          className="md:max-h-[300px] min-h-[300px] mh-full items-start bg-gradient-to-tr from-dark-blue to-[#07137B] flex overflow-hidden rounded-[15px] flex-col text-white justify-items-stretch  "
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
                alt={"image"}
              />
            </div>
            <div className="w-[85%] relative pl-7 pt-2">
              {isOwner && (
                <button
                  className="absolute mr-5 mt-2 top-0 right-0 bg-green p-2 rounded-xl hover:scale-[103%] hover:font-extrabold transition-[0.2s] "
                  onClick={handleOpen}
                >
                  Edit Profile
                </button>
              )}

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                  style: {
                    backgroundColor: "rgba(170,170,170,0.1)",

                    backdropFilter: "blur(3px)",
                  },
                }}
              >
                <Box sx={style}>
                  <div className="relative h-full w-full flex-column ">
                    <div className="pt-[20px] pb-[15px] text-white text-[20px] w-[70%] mx-auto flex justify-center italic border-white border-b-2 ">
                      Edit Your Profile
                    </div>

                    <div className=" px-8 mt-[14px] h-[100%] text-white ">
                      <form
                        className="flex flex-col w-full"
                        onSubmit={(e) => {
                          handleSubmit(e, id as string);
                        }}
                      >
                        <label className="relative py-2 flex flex-row">
                          School Name:
                          <input
                            className="focus:outline-none bg-transparent border-green border-b-2 w-[70%] right-0 absolute"
                            type="text"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                          />
                        </label>

                        <label className="relative py-2 flex flex-row">
                          School Bio:
                          <input
                            className="focus:outline-none bg-transparent border-green border-b-2 w-[70%] right-0 absolute"
                            type="text"
                            value={schoolBio}
                            onChange={(e) => setSchoolBio(e.target.value)}
                          />
                        </label>

                        <label className="relative py-2 flex flex-row">
                          School Email:
                          <input
                            className="focus:outline-none bg-transparent border-green border-b-2 w-[70%] right-0 absolute"
                            type="text"
                            value={schoolEmail}
                            onChange={(e) => setSchoolEmail(e.target.value)}
                          />
                        </label>

                        <label className="relative py-2 flex flex-row">
                          School Website:
                          <input
                            className="focus:outline-none bg-transparent border-green border-b-2 w-[70%] right-0 absolute"
                            type="text"
                            value={website === null ? "missing" : website}
                            onChange={(e) => setWebsite(e.target.value)}
                          />
                        </label>

                        <label className="relative py-2 flex flex-row">
                          School Number:
                          <input
                            className="focus:outline-none bg-transparent border-green border-b-2 w-[70%] right-0 absolute"
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </label>
                        <SelectLocation styled inputs={address} />
                        <label className="mt-4 flex">
                          Is the school hiring?
                          <div className="px-8">
                            <input
                              className="w-4 h-4 text-green bg-red-500 border-gray-300 rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                              type="checkbox"
                              checked={isHiring}
                              onChange={(e) => setIsHiring(e.target.checked)}
                            />
                          </div>
                        </label>
                        <div className=" mt-4 flex w-full justify-center">
                          <button
                            onClick={handleClose}
                            className="rounded-xl px-4 py-2 hover:font-extrabold hover-scale-[105%] transition-[0.1s] "
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="rounded-xl px-4 py-2 bg-green hover:font-extrabold hover-scale-[105%] transition-[0.1s] "
                          >
                            Save Changes
                          </button>
                        </div>
                        {spinner && (
                          <div className={"m-8"}>
                            <Spinner />
                          </div>
                        )}
                        {errorMessage !== "" && (
                          <p
                            className={
                              "bg-red-500 p-2 mt-10 rounded-2xl text-white font-bold text-center"
                            }
                          >
                            {errorMessage}
                          </p>
                        )}
                        {successMessage !== "" && (
                          <p
                            className={
                              "bg-green p-2 mt-10 rounded-2xl text-white font-bold text-center"
                            }
                          >
                            {successMessage}
                          </p>
                        )}
                      </form>
                    </div>
                  </div>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "0.5rem",
                      right: "0.7rem",
                      color: "#1ACD77",
                      "&:hover": { color: "#1AFF77" },
                      transition: "0.1s ease",
                    }}
                    onClick={handleClose}
                  >
                    <AiFillCloseCircle />
                  </IconButton>
                </Box>
              </Modal>

              <h2 className="font-bold ">{school.name}</h2>
              <div className="pt-2 flex flex-row ">
                <div className=" ">
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
          className="bg-gradient-to-tl from-dark-blue to-[#07135F] text-white p-[20px] rounded-[10px] flex md:h-auto h-[300px] "
          style={{ gridRow: "1/3" }}
        >
          <h2 className="m-auto italic">Feature not implemented</h2>
        </div>

        <div className="bg-gradient-to-bl from-dark-blue to-[#07135F] flex flex-col rounded-[15px] items-center justify-center overflow-hidden md:h-auto h-[250px] ">
          <div className="w-full flex items-center md:h-1/2 h-3/4 md:justify-around md:flex-row flex-col">
            <div className="flex flex-row my-auto">
              <BsFillTelephoneFill className="fill-green scale-[120%] m-auto " />
              <span className="px-2">{school.phone_number}</span>
            </div>
            <div className=" md:w-[1px] w-[70%] bg-white md:h-[70%] h-[1px] "></div>

            <div className="flex flex-row my-auto ">
              <MdEmail className="fill-green scale-[120%] m-auto " />
              <span className="px-2">{school.email}</span>
            </div>
            <div className=" md:w-[1px] w-[80%] bg-white md:h-[70%] h-[1px] "></div>

            <div className="flex flex-row my-auto">
              <AiOutlineGlobal className="fill-green scale-[120%] m-auto " />
              <span className="px-2">{school.website}</span>
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
