import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React, { ReactComponentElement } from "react";

export default function RatingSection({
  children,
}: {
  children: ReactComponentElement<any>;
}) {
  return (
    <Accordion
      sx={{
        width: "100%",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <AccordionDetails
        className={"h-fit"}
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
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
            <p className="text-dark-blue">Level</p>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
}
