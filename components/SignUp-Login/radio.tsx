import { RadioButton } from "@/interfaces/radioButton";
import React, { MouseEventHandler } from "react";

export default function Radio({
  label,
  name,
  value,
  options,
}: {
  label: string;
  name: string;
  value: string;
  options: Array<RadioButton>;
}) {
  const selected =
    "bg-green px-4 py-2 rounded-xl text-white hover:shadow-[2px_3px_3px_grey]";
  const notSelected =
    "border border-green bg-white px-4 py-2 rounded-xl hover:shadow-[2px_3px_3px_grey]";
  return (
    <>
      <div className={"text-[18px] text-dark-blue block  mb-[3px] w-full"}>
        {label}
      </div>
      <div className="flex justify-around gap-5 m-8 mt-4">
        {options.map((opt) => (
          <div key={opt.value}>
            <input
              className={"hidden"}
              type="radio"
              name={name}
              id={opt.value}
              value={opt.value}
              checked={value === opt.value}
              onChange={opt.onChange}
            />
            <label
              className={value === opt.value ? selected : notSelected}
              htmlFor={opt.value}
            >
              {opt.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
