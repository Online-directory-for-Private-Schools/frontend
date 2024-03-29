import React, { ReactComponentElement, useState } from "react";
import Spinner from "@/components/Utils/Spinner";

export default function Form({
  SignUp,
  Login,
  CreateSchool,
  errorMessage,
  SuccessMessage = "",
  onSubmit,
  children,
  submitMessage = "Create Account",
  title,
}: {
  SignUp?: boolean;
  Login?: boolean;
  CreateSchool?: boolean;
  errorMessage: String;
  onSubmit: Function;
  SuccessMessage?: string;
  children?: ReactComponentElement<any>;
  submitMessage?: String;
  title?: String;
}) {
  let [spinner, setSpinner] = useState(false);
  return (
    <div className={"bg-white p-12 w-[450px] rounded-xl m-auto mt-20 mb-20"}>
      {!!title && (
        <div className="text-center font-[700] text-dark-blue text-[20px]">
          {title}
        </div>
      )}
      <div className="text-center font-[700] text-dark-blue text-[28px]">
        {SignUp && "Sign Up"}
        {Login && "Login"}
        {CreateSchool && "Create School"}
      </div>

      <form>
        <div className="mt-10">
          {children}
          <div className="flex justify-center">
            <button
              className="outline-none mt-[20px] items-center w-[55%] rounded-xl text-[15px] font-bold bg-green p-2 border-none text-white cursor-pointer duration-300 shadow-sm hover:p-[11px] hover:shadow-[5px_5px_10px_#504f4f]"
              onClick={(e) => {
                setSpinner(true);
                onSubmit(e, setSpinner);
              }}
            >
              {submitMessage}
            </button>
          </div>
          {spinner && (
            <div className={"m-5"}>
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
          {SuccessMessage !== "" && (
            <p
              className={
                "bg-green p-2 mt-10 rounded-2xl text-white font-bold text-center"
              }
            >
              {SuccessMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
