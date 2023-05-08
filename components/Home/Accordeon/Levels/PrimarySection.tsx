import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import FormControl from "../FormControl";


export default function PhaseSection({name, numberOfGrades, values, onChange}: {name: string, numberOfGrades: number, values: Array<boolean>, onChange: Function}) {
  const generateGrades = (number: number) => {
    let grades: Array<string> = [];
    for (let i = 1; i <= number; i++) {
      grades.push("Grade " + i.toString());
    }
    return grades;
  };
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
        <p className="text-dark-blue">{name}</p>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {generateGrades(numberOfGrades).map((grade, index) => (
            <FormControl key={grade} number={index} element={grade} values={values} onChange={onChange}/>
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}
