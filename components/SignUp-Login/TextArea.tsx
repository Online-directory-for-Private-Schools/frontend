import React, { ChangeEventHandler, ReactComponentElement, ReactHTMLElement } from "react";

export default function TextArea({
  name,
  value,
  onChange,
  MAX_SIZE,
  children
}: {
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  children: ReactComponentElement<any>;
  MAX_SIZE: number;
}) {
  return (
    <div className="py-2 w-full">
      <label
        className={"text-[18px] text-dark-blue block  mb-[3px] w-full"}
        htmlFor={name}
      >
        {children}
      </label>
      <div className={"relative border border-[#9597a6]  rounded-xl"}>
        <textarea
          className={
            "w-full outline-none  rounded-xl p-3 resize-none col-span-9"
          }
          id={name}
          value={value}
          onChange={onChange}
        />
        <p className={"text-[10px] text-right pt-0 pr-4"}>
          {value.length}/{MAX_SIZE}
        </p>
      </div>
    </div>
  );
}
