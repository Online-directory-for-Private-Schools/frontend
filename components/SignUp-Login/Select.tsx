import React, { ChangeEvent, ChangeEventHandler } from "react";

export default function Select({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  options: Array<string>;
}) {
  return (
    <div className="py-2 w-full">
      <label
        className={"text-[18px] text-dark-blue block  mb-[3px] w-full"}
        htmlFor={name}
      >
        {name}
      </label>
      <select
        id={name}
        value={value}
        onChange={onChange}
        className={
            "w-full p-[10px] rounded-xl border border-solid border-gray-400 outline-none focus:border-green focus:shadow-[2px_2px_3px_#1ACD77] duration-300"
          }
      >
        <option defaultChecked>--{name}--</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
