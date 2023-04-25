import React, { ChangeEventHandler } from "react";
import Input from "./input";
import { InputInterface } from "@/interfaces/Input";
import Select from "./Select";
import { SelectInterface } from "@/interfaces/Select.interface";

export default function InputGrp({
  input = false,
  select = false,
  inputs,
}: {
  input?: boolean;
  select?: boolean;
  inputs: Array<InputInterface | SelectInterface>;
}) {
  if (input && select)
    throw Error(
      "Cannot have both input and Select properties at the same time"
    );

  if (!input && !select)
    throw Error("Must Speficy either input or select input types");

  return (
    <div className="flex justify-between gap-5">
      {inputs.map((input) => (
        <>
          {input && !select && (
            <Input
              // @ts-ignore
              key={input.label}
              // @ts-ignore
              type={input.type}
              // @ts-ignore
              label={input.label}
              value={input.value}
              onChange={input.onChange}
            />
          )}
          {select && (
            <Select
               // @ts-ignore
               key={input.name}
              // @ts-ignore
              name={input.name}
              value={input.value}
              onChange={input.onChange}
              // @ts-ignore
              options={input.options}
            />
          )}
        </>
      ))}
    </div>
  );
}
