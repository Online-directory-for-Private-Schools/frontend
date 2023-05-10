import React, { ChangeEventHandler, FocusEventHandler, useState } from "react";

export default function Input({
  type,
  label,
  value,
  onChange,
  onBlur,
}: {
  type: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler;
  onBlur?: FocusEventHandler;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="py-2 w-full">
      <label
        className={"text-[18px] text-dark-blue block  mb-[3px] w-full"}
        htmlFor={value}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={
            "w-full p-[10px] rounded-xl border border-solid border-gray-400 outline-none focus:border-green focus:shadow-[2px_2px_3px_#1ACD77] duration-300"
          }
          type={showPassword ? "text" : type}
          id={value}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {type === "password" && (
          <div
            className="absolute right-0 top-0 mt-3 mr-3 text-gray-500 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </div>
        )}
      </div>
    </div>
  );
}
