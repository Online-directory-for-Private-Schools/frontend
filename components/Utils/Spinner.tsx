import React from "react";
import { CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <div
      className={
        "w-full h-full bg-gray-400/0 flex justify-center [&>*]:my-auto"
      }
    >
      <CircularProgress color="success" />
    </div>
  );
};

export default Spinner;
