import * as React from "react";
import LevelSection from "./Levels/LevelSection";
import PhaseSection from "./Levels/PrimarySection";
import PriceSection from "@/components/Home/Accordeon/PriceSection";
import AddressSection from "@/components/Home/Accordeon/AddressSection";
import { SelectInterface } from "@/interfaces/Select.interface";
import { ChangeEventHandler } from "react";

export default function CourseAccordion({
  Mprices: Mprices,
  Sprices: Sprices,
  address: address,
}: {
  Mprices: { values: Array<number>; onChange: Array<ChangeEventHandler> };
  Sprices: { values: Array<number>; onChange: Array<ChangeEventHandler> };

  address: Array<SelectInterface>;
}) {
  return (
    <div className="flex flex-col">
      <AddressSection values={address} />
      <PriceSection
        title={"Monthly Price"}
        values={Mprices.values}
        onChange={Mprices.onChange}
      />
      <PriceSection
        title={"Price Per Session"}
        values={Sprices.values}
        onChange={Sprices.onChange}
      />

      {/*<LevelSection>*/}
      {/*  <>*/}
      {/*    {phases.map((phase) => (*/}
      {/*      <PhaseSection*/}
      {/*        key={phase.name}*/}
      {/*        name={phase.name}*/}
      {/*        numberOfGrades={phase.number}*/}
      {/*        values={phase.values}*/}
      {/*        onChange={phase.onChange}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </>*/}
      {/*</LevelSection>*/}
    </div>
  );
}
