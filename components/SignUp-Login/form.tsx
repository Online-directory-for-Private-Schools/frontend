import React, { MouseEventHandler, ReactComponentElement } from "react";

export default function Form({
  errorMessage,
  onSubmit,
  children,
}: {
  errorMessage: String;
  onSubmit: MouseEventHandler;
  children?: ReactComponentElement<any>;
}) {
  return (
    <div className={"bg-white p-12 w-[450px] rounded-xl m-auto mt-20 mb-20"}>
      <div className="text-center font-[700] text-dark-blue text-[20px]">
        Please add the school info
      </div>
      {errorMessage !== "" && (
        <p
          className={
            "bg-red-500 p-2 rounded-2xl text-white font-bold text-center"
          }
        >
          {errorMessage}
        </p>
      )}
      <form>
        <div className="mt-10">
          {children}
          <div className="flex justify-center">
            <button
              className="mt-[20px] items-center w-[55%] rounded-xl text-[15px] font-bold bg-green p-2 border-none text-white cursor-pointer duration-300 shadow-sm hover:p-[11px] hover:shadow-[5px_5px_10px_#504f4f]"
              onClick={onSubmit}
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
