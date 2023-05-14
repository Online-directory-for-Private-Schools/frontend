import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import SelectLocation from "@/components/SignUp-Login/SelectLocation";
import { SelectInterface } from "@/interfaces/Select.interface";

export default function AddressSection({
  values,
}: {
  values: Array<SelectInterface>;
}) {
  return (
    <Accordion
      className={"sidebar flex flex-col w-full overflow-scroll"}
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
        <p className="text-dark-blue">Address</p>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <SelectLocation inputs={values} />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}
