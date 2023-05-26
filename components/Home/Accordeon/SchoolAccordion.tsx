import * as React from "react";
import RatingSection from "./RatingSection";
import LevelSection from "./Levels/LevelSection";
import PhaseSection from "./Levels/PrimarySection";
import AddressSection from "@/components/Home/Accordeon/AddressSection";
import { SelectInterface } from "@/interfaces/Select.interface";

export default function SchoolAccordion({
  rating: rating,
  address: address,
}: {
  rating: { values: Array<boolean>; onChange: Function };
  address: Array<SelectInterface>;
}) {
  return (
    <div className="flex flex-col">
      <AddressSection values={address} />
      {/*<RatingSection values={rating.values} onChange={rating.onChange} />*/}
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
