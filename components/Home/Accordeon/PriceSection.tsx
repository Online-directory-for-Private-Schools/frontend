import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React, { ReactComponentElement, useState } from "react";
import FormControl from "./FormControl";

const generatePriceRange = (number: number) => {
  if (number === 0) {
    return <p>Free</p>;
  } else if (number === 1) {
    return (
      <p>
        500<span className={"text-[10px]"}> DZD</span> - 1000
        <span className={"text-[10px]"}> DZD</span>
      </p>
    );
  } else if (number === 2) {
    return (
      <p>
        1000<span className={"text-[10px]"}> DZD</span> - 2000
        <span className={"text-[10px]"}> DZD</span>
      </p>
    );
  } else if (number === 3) {
    return (
      <p>
        2000<span className={"text-[10px]"}> DZD</span> - 3000
        <span className={"text-[10px]"}> DZD</span>
      </p>
    );
  } else {
    return (
      <p>
        3000<span className={"text-[10px]"}> DZD</span> +
      </p>
    );
  }
};
const generatePriceRanges = () => {
  let reviewArray: Array<{
    element: ReactComponentElement<any>;
    number: number;
  }> = [];
  for (let i = 0; i < 5; i++) {
    reviewArray.push({
      element: (
        <div key={i} className="flex flex-row">
          {generatePriceRange(i)}
        </div>
      ),
      number: i,
    });
  }
  return reviewArray;
};

export default function PriceSection({
  values,
  onChange,
}: {
  values: Array<boolean>;
  onChange: Function;
}) {
  return (
    <Accordion
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p className="text-dark-blue">Prices</p>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {generatePriceRanges().map((price) => (
            <FormControl
              key={price.number}
              number={price.number}
              element={price.element}
              values={values}
              onChange={onChange}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}
