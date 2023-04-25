import React, { ChangeEventHandler, FocusEventHandler } from "react";

export default function Input({
  type,
  label,
  value,
  onChange,
  onBlur,
}: {
  type: string;
  label: string;
  value: string ;
  onChange: ChangeEventHandler;
  onBlur?: FocusEventHandler;
}) {
    return (
      <div className="py-2 w-full">
        <label
        className={"text-[18px] text-dark-blue block  mb-[3px] w-full"}
        htmlFor={value}
        >
          {label}
        </label>
        <input
          className={
            "w-full p-[10px] rounded-xl border border-solid border-gray-400 outline-none focus:border-green focus:shadow-[2px_2px_3px_#1ACD77] duration-300"
          }
          type={type}
          id={value}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
}
