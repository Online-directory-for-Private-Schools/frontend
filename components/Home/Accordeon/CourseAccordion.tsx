import * as React from "react";
import RatingSection from "./RatingSection";
import LevelSection from "./Levels/LevelSection";
import PhaseSection from "./Levels/PrimarySection";
import PriceSection from "@/components/Home/Accordeon/PriceSection";

export default function CourseAccordion({
  prices: prices,
  phases: phases,
}: {
  prices: { values: Array<boolean>; onChange: Function };
  phases: Array<{
    name: string;
    number: number;
    values: Array<boolean>;
    onChange: Function;
  }>;
}) {
  return (
    <div className="flex flex-col">
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
