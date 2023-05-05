import { FormControlLabel, Checkbox } from "@mui/material";
import React, { ReactElement } from "react";

export default function FormControl({
  number,
  element,
  values,
  onChange,
}: {
  number: number;
  element: ReactElement | string;
  values: Array<boolean>;
  onChange: Function;
}) {
  return (
    <FormControlLabel
      key={number}
      control={
        <Checkbox
          checked={values[number]}
          onChange={(e: any) => {
            let newValues: Array<boolean> = [];
            for (let i = 0; i < values.length; i++) newValues[i] = values[i];
            newValues[number] = !newValues[number];
            onChange(newValues);
          }}
        />
      }
      label={element}
    />
  );
}
