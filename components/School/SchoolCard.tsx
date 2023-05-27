import React from "react";
import { AiTwotoneStar, AiFillCloseCircle } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import Logo from "@/public/School_Logo.svg";
import Link from "next/link";
import { Box, Modal, IconButton } from "@mui/material";
import Spinner from "@/components/Utils/Spinner";
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
    id,
    name,
    lng,
    lat,
    // initialFavorite,
    // rating,
    bio,
  },
}: {
  SchoolProps: SchoolCardProps;
}) => {
  // const [favorite, setFavorite] = useState(initialFavorite);
  // const toggleFavorite = (e: any) => {
  //   e.stopPropagation();
  //   setFavorite(!favorite);
  // };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    color: "dark-blue",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -70%)",
    width: 650,
    bgcolor: "rgba(255,255,255,0.7)",
    borderRadius: "25px",
    maxHeight: "90vh",
    p: 5,
    paddingTop: "20px",
    margin: "auto",
    backdropFilter: "blur(5px)",
    minHeight: "50vh",
    "&:focus": { outline: "none" },
  };
  return (
    <div
      className={
        "z-40 flex flex-col gap-4 w-full bg-white" +
        " h-44 rounded-xl border-2 p-3 shadow-[0_5px_10px] " +
        "shadow-gray-900/20 overflow-hidden " +
        "duration-300 hover:-translate-y-[5px] transform text-xl"
      }
      onClick={handleOpen}
    >
      <div className="flex flex-row sm:flex justify-between h-max ">
        <Modal
          open={open}
          onBlur={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-bio"
          BackdropProps={{
            style: {
              backgroundColor: "rgba(170,170,170,0.3)",
              backdropFilter: "blur(3px)",
            },
          }}
        >
          <Box sx={style}>
            <div className="mx-auto m-2 w-full relative text-dark-blue items-center flex justify-between my-auto mb-[0px] mt-0 pb-[20px] border-b-2 border-[#07136B]">
              <div className="pt-3 grid-cols-[50%_50%] grid ">
                <div className="mr-[40px]">
                  <div className="my-auto pb-[20px] font-bold text-2xl">
                    {name}
                  </div>
                  <Link
                    className="flex flex-row my-auto text-left justify-start"
                    href={`https://www.google.com/maps?q=${lng + "," + lat}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiMap className="my-auto mr-1 fill-green hover:scale-[130%] duration-200 translate-y-[-2px] scale-[115%] " />
                    <h2 className={"my-auto text-m"}></h2>
                  </Link>
                </div>
                <div className=" w-max ">
                  {/*<div className="stars-text flex flex-row pb-[20px]">*/}
                  {/*  <div className="flex whitespace-nowrap flex-row justify-start pt-2 ">*/}
                  {/*    {renderStars(rating)}*/}
                  {/*  </div>*/}
                  {/*  <div className="pl-[5px] text-dark-blue pt-[4px]">*/}
                  {/*    (x ratings)*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  {/*<button*/}
                  {/*  className="flex flex-row mt-[5px] justify-self-stretch"*/}
                  {/*  onClick={toggleFavorite}*/}
                  {/*>*/}
                  {/*  {!favorite ? (*/}
                  {/*    <BsBookmark className="w-[25%] my-auto fill-green" />*/}
                  {/*  ) : (*/}
                  {/*    <BsBookmarkFill className="w-[25%] my-auto fill-green" />*/}
                  {/*  )}*/}

                  {/*  <p className={"text-sm pl-1 text-m whitespace-nowrap"}>*/}
                  {/*    Add to favourites*/}
                  {/*  </p>*/}
                  {/*</button>*/}
                </div>
              </div>
              {/*<div className="h-[80px] items-center w-[25%] my-auto p-0 m-0 mr-[50px] flex flex-row">*/}
              {/*<Image*/}
              {/*  className={*/}
              {/*    "w-[100%] min-h-full items-center rounded-xl bg-green mr-[30px] p-2 my-auto"*/}
              {/*  }*/}
              {/*  src={Logo.src}*/}
              {/*  width={200}*/}
              {/*  height={200}*/}
              {/*  alt="School"*/}
              {/*/>*/}
              {/*</div>*/}
            </div>

            <p className="w-full mx-auto italic m-2 p-0 pb-[15px] border-b-2 border-[#07136B]">
              {bio}
            </p>

            <div className="mx-auto w-full m-2 mb-0 flex justify-center rounded-t-[15px] bg-gradient-to-br from-dark-blue to-[#07133B]">
              <h1 className="m-2 p-1  font-extrabold my-auto text-white">
                Courses
              </h1>
            </div>
            <div className="mx-auto h-[100px] m-2 mt-0 w-full border-[1px] rounded-b border-dark-blue">
              <Spinner />
            </div>

            <IconButton
              sx={{
                position: "absolute",
                top: "0.5rem",
                right: "0.7rem",
                color: "#1ACD77",
                "&:hover": { color: "#07133B" },
                transition: "0.1s ease",
              }}
              onChange={handleOpen}
            >
              <AiFillCloseCircle />
            </IconButton>
          </Box>
        </Modal>

        {/*<div className="w-[15%]">*/}
        {/*  <Image*/}
        {/*    className={"w-full h-full rounded-xl bg-gray-400 p-2"}*/}
        {/*    src={Logo.src}*/}
        {/*    width={200}*/}
        {/*    height={100}*/}
        {/*    alt="School"*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="w-[100%] pl-6">
          <h2 className="font-bold ">{name}</h2>
          <Link href={`/SchoolProfile/${id}`} className={"underline text-sm"}>
            Check School Profile
          </Link>
          <div className="pt-2 grid-cols-[50%_50%] grid">
            <div>
              <Link
                className="flex flex-row text-left justify-start"
                // href={`https://www.google.com/maps?q=${lng + ", " + lat}`}
                href={""}
                target="_blank"
                rel="noreferrer"
              >
                <BiMap className="my-auto mr-2 fill-green" />
                <h2 className={"my-auto"}></h2>
              </Link>
            </div>
            {/*<div className="flex flex-row justify-end ">*/}
            {/*  <button*/}
            {/*    className={"flex flex-row gap-2"}*/}
            {/*    onClick={toggleFavorite}*/}
            {/*  >*/}
            {/*    {!favorite ? (*/}
            {/*      <BsBookmark className=" my-auto fill-green" />*/}
            {/*    ) : (*/}
            {/*      <BsBookmarkFill className="my-auto fill-green" />*/}
            {/*    )}*/}
            {/*    <p className={"text-sm my-auto"}>Add to favourites</p>*/}
            {/*  </button>*/}
            {/*</div>*/}
            {/*<div className="flex flex-row justify-start pt-2 ">*/}
            {/*  {renderStars(rating)}*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      <div>
        <p className={"cutoff-text"}>{bio}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
