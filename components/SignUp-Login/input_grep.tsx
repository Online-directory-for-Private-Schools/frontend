import React, { ChangeEventHandler } from "react";
import Input from "./input";
import { InputInterface } from "@/interfaces/Input";

export default function InputGrp({
  inputs
}: {
  inputs: Array<InputInterface>}) {
  return (
    <div className="flex justify-between gap-5">
      {
        inputs.map(input => 
        <Input type={input.type} label={input.label} value={input.value} onChange={input.onChange} />
        )
      }
     
    </div>
  );
}
