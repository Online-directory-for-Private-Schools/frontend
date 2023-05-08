import React, { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import Image from "next/image";
import Logo from "@/public/School_Logo.svg";
import Link from "next/link";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  ModalBody,
} from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
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
  const toggleFavorite = (e: any) => {
    e.stopPropagation();
    setFavorite(!favorite);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const cutoff = `.cutoff-text{
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }`;

  return (
    <div
      className={
        "z-40 flex flex-col gap-4 w-[100%] bg-white" +
        " h-44 rounded-xl border-2 p-3 shadow-[0_5px_10px] " +
        "shadow-gray-900/20 overflow-hidden " +
        "duration-300 hover:-translate-y-[5px] transform text-xl"
      }
      onClick={onOpen}
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
          <Modal
            size="2xl"
            motionPreset="slideInRight"
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay
              bg="rgba(170,170,170,0.3)"
              backdropFilter="blur(3px)"
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
            />
            <ModalContent
              borderRadius={"25px"}
              bg="rgba(255,255,255,0.5)"
              backdropFilter="blur(10px)"
              className="border-1"
            >
              <ModalBody>
                <div className="m-2 w-full relative text-dark-blue items-center flex justify-between my-auto mb-[0px] mt-[10px] pb-[20px] border-b-2 border-[#07136B]">
                  <div className="pt-3 grid-cols-[50%_50%] grid">
                    <div className="mr-[40px]">
                      <div className="my-auto pb-[20px] font-bold text-2xl">
                        {schoolName}
                      </div>
                      <div onClick={(e) => e.stopPropagation()}>
                        <Link
                          className="flex flex-row my-auto text-left justify-start"
                          href={`https://www.google.com/maps?q=${googleMapLocation}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BiMap className="my-auto mr-1 fill-green hover:scale-[130%] duration-200 translate-y-[-2px] scale-[115%] " />
                          <h2 className={"my-auto text-m"}>{schoolCity}</h2>
                        </Link>
                      </div>
                    </div>
                    <div className=" w-max ">
                      <div className="stars-text flex flex-row pb-[20px]">
                        <div className="flex whitespace-nowrap flex-row justify-start pt-2 ">
                          {renderStars(rating)}
                        </div>{" "}
                        <div className="pl-[5px] text-dark-blue pt-[4px]">
                          (x ratings)
                        </div>
                      </div>

                      <button
                        className="flex flex-row mt-[5px] justify-self-stretch"
                        onClick={(e) => toggleFavorite}
                      >
                        {!favorite ? (
                          <BsBookmark className="w-[25%] my-auto fill-green" />
                        ) : (
                          <BsBookmarkFill className="w-[25%] my-auto fill-green" />
                        )}

                        <p className={"text-sm pl-1 text-m whitespace-nowrap"}>
                          Add to favourites
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="h-[80px] items-center w-[25%] my-auto p-0 m-0 mr-[50px] flex flex-row">
                    <Image
                      className={
                        "w-[100%] min-h-full items-center rounded-xl bg-green mr-[30px] p-2 my-auto"
                      }
                      src={Logo.src}
                      width={200}
                      height={200}
                      alt="School"
                    />
                  </div>
                </div>
                <CloseButton
                  className="bg-green rounded-full"
                  fill="green"
                  aria-label="Close modal"
                  onClick={onClose}
                  position="absolute"
                  top={3}
                  right={5}
                  bg="#1ACD77"
                  size="sm"
                  color="white"
                  borderRadius={"full"}
                  _hover={{ bg: "#07133B", color: "#1ACD77" }}
                />

                <p className="w-full italic m-2 p-0 pb-[15px] border-b-2 border-[#07136B]">
                  {description}
                </p>

                <div className="w-full m-2 mb-0 flex justify-center rounded-t-[15px] bg-gradient-to-br from-dark-blue to-[#07133B]">
                  <h1 className="m-2 p-1  font-extrabold my-auto text-white">
                    Courses
                  </h1>
                </div>
                <div className="h-[100px] m-2 mt-0 w-full border-[1px] rounded-b border-dark-blue">
                  Courses //
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
          <h2 className="font-bold ">{schoolName}</h2>
          <div className="pt-2 grid-cols-[50%_50%] grid">
            <div>
              <Link
                className="flex flex-row text-left justify-start"
                href={`https://www.google.com/maps?q=${googleMapLocation}`}
                target="_blank"
                rel="noreferrer"
              >
                <BiMap className="my-auto mr-2 fill-green" />
                <h2 className={"my-auto"}>{schoolCity}</h2>
              </Link>
            </div>
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
