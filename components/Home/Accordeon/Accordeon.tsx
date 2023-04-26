import * as React from "react";
import RatingSection from "./RatingSection";
import LevelSection from "./Levels/LevelSection";
import PhaseSection from "./Levels/PrimarySection";

export default function SimpleAccordion({
  rating: rating,
  phases: phases,
}: {
  rating: { values: Array<boolean>; onChange: Function };
  phases: Array<{
    name: string;
    number: number;
    values: Array<boolean>;
    onChange: Function;
  }>;
}) {
  return (
    <div className="flex flex-col">
      <RatingSection values={rating.values} onChange={rating.onChange} />
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
