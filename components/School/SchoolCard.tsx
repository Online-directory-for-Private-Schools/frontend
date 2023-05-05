import React, { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import Image from "next/image";
import Logo from "@/public/School_Logo.svg";
import Link from "next/link";

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
const SchoolCard = ({
  SchoolProps: {
    schoolName,
    schoolCity,
    googleMapLocation,
    initialFavorite,
    rating,
    description,
  },
}: {
  SchoolProps: SchoolCardProps;
}) => {
  const [favorite, setFavorite] = useState(initialFavorite);
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div
      className={
        "z-40 flex flex-col gap-4 w-[100%] bg-white" +
        " h-44 rounded-xl border-2 p-3 shadow-[0_5px_10px] " +
        "shadow-gray-900/20 overflow-hidden " +
        "duration-300 hover:-translate-y-[5px] transform text-xl"
      }
    >
      <div className="flex flex-row justify-between h-max ">
        <div className="w-[15%]">
          <Image
            className={"w-full h-full rounded-xl bg-gray-400 p-2"}
            src={Logo.src}
            width={200}
            height={100}
            alt="School"
          />
        </div>
        <div className="w-[85%] pl-6">
          <h2 className="font-bold ">{schoolName}</h2>
          <div className="pt-2 grid-cols-[50%_50%] grid">
            <Link
              className="flex flex-row text-left justify-start"
              href={`https://www.google.com/maps?q=${googleMapLocation}`}
              target="_blank"
              rel="noreferrer"
            >
              <BiMap className="my-auto mr-2 fill-green" />
              <h2 className={"my-auto"}>{schoolCity}</h2>
            </Link>
            <div className="flex flex-row justify-end ">
              <button
                className={"flex flex-row gap-2"}
                onClick={toggleFavorite}
              >
                {!favorite ? (
                  <BsBookmark className=" my-auto fill-green" />
                ) : (
                  <BsBookmarkFill className="my-auto fill-green" />
                )}
                <p className={"text-sm my-auto"}>Add to favourites</p>
              </button>
            </div>
            <div className="flex flex-row justify-start pt-2 ">
              {renderStars(rating)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
