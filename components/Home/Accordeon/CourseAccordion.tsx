import * as React from "react";
import LevelSection from "./Levels/LevelSection";
import PhaseSection from "./Levels/PrimarySection";
import PriceSection from "@/components/Home/Accordeon/PriceSection";
import AddressSection from "@/components/Home/Accordeon/AddressSection";
import { SelectInterface } from "@/interfaces/Select.interface";

export default function CourseAccordion({
  prices: prices,
  phases: phases,
  address: address,
}: {
  prices: { values: Array<boolean>; onChange: Function };
  phases: Array<{
    name: string;
    number: number;
    values: Array<boolean>;
    onChange: Function;
  }>;
  address: Array<SelectInterface>;
}) {
  return (
    <div className="flex flex-col">
      <AddressSection values={address} />
      <PriceSection values={prices.values} onChange={prices.onChange} />
      <LevelSection>
        <>
          {phases.map((phase) => (
            <PhaseSection
              key={phase.name}
              name={phase.name}
              numberOfGrades={phase.number}
              values={phase.values}
              onChange={phase.onChange}
            />
          ))}
        </>
      </LevelSection>
    </div>
  );
}
