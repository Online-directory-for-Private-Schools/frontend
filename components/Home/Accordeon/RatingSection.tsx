import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React, { ReactComponentElement, useState } from "react";
import { renderStars } from "@/components/School/SchoolCard";
import FormControl from "./FormControl";

const generateStarts = () => {
  let reviewArray: Array<{
    element: ReactComponentElement<any>;
    number: number;
  }> = [];
  for (let i = 5; i >= 0; i--) {
    reviewArray.push({
      element: (
        <div key={i} className="flex flex-row">
          {renderStars(i)}
        </div>
      ),
      number: i,
    });
  }
  return reviewArray;
};

export default function RatingSection({
  values,
  onChange,
}: {
  values: Array<boolean>;
  onChange: Function;
}) {
  return (
    <Accordion
      className={"sidebar flex flex-col overflow-scroll"}
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
        <p className="text-dark-blue">Rating</p>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {generateStarts().map((review) => (
            <FormControl
              key={review.number}
              number={review.number}
              element={review.element}
              values={values}
              onChange={onChange}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}
