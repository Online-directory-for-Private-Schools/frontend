import React, { ChangeEventHandler } from "react";

export default function Select({
  styled,
  name,
  value,
  onChange,
  options,
  disabled,
}: {
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  options: Array<{ id: string; name: string }>;
  disabled?: boolean;
  styled?: boolean;
}) {
  return (
    <div className="py-2 w-full">
      <label
        className={
          styled
            ? "text-[18px] text-white block  mb-[3px] w-full"
            : "text-[18px] text-dark-blue block  mb-[3px] w-full"
        }
        htmlFor={name}
      >
        {name}
      </label>
      <select
        disabled={disabled}
        id={name}
        value={value}
        onChange={onChange}
        className={
          styled
            ? "w-full p-[10px] rounded-xl border bg-dark-blue border-green border-gray-400 outline-none focus:border-green focus:shadow-[2px_2px_3px_#1ACD77] duration-300"
            : "w-full p-[10px] rounded-xl border border-solid border-gray-400 outline-none focus:border-green focus:shadow-[2px_2px_3px_#1ACD77] duration-300"
        }
      >
        <option defaultChecked value={""}>
          --{name}--
        </option>
        {options.map((option, index) => (
          // @ts-ignore
          <option key={index} value={!option.id ? option : option.id}>
            {/*@ts-ignore*/}
            {!option.name ? option : option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
