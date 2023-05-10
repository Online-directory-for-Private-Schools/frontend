import React, { ChangeEventHandler } from "react";

export default function Select({
  name,
  value,
  onChange,
  options,
  disabled,
}: {
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  options: Array<string>;
  disabled?: boolean;
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
        disabled={disabled}
        id={name}
        value={value}
        onChange={onChange}
        className={
          "w-full p-[10px] rounded-xl border border-solid border-gray-400 outline-none focus:border-green focus:shadow-[2px_2px_3px_#1ACD77] duration-300"
        }
      >
        <option defaultChecked value={""}>
          --{name}--
        </option>
        {options.map((option) => (
          <option
            key={!option.id ? option : option.id}
            value={!option.id ? option : option.id}
          >
            {/*@ts-ignore*/}
            {!option.name ? option : option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
