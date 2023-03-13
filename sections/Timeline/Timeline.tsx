import { useState } from "react";
import { Timeline } from "@/types/Timeline";
import {
  timelineOverlayVariants,
  timelineSection,
  timelineYear,
  timelineYears,
} from "./Timeline.css";
import {
  getYears,
  getExperienceRenderData,
  getYearsReversed,
} from "./Timeline.utilities";
import { Experience } from "./Experience/Experience";

interface TimelineProps {
  timeline: Timeline;
}

export const TimelineSection = ({ timeline }: TimelineProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const years = getYears({ timeline });
  const yearsReversed = getYearsReversed({ years });
  const experienceRenderData = getExperienceRenderData({
    experiences: timeline.experiences,
    years,
    yearsReversed,
  });

  return (
    <section className={timelineSection}>
      <div className={timelineYears}>
        {yearsReversed.map((year) => (
          <div className={timelineYear} data-year={year} key={year} />
        ))}
        {experienceRenderData.map(
          ({ company, description, id, job, logo, position, span }) => (
            <Experience
              activeId={activeId}
              company={company}
              description={description}
              id={id}
              job={job}
              logo={logo}
              key={id}
              position={position}
              setActiveId={setActiveId}
              span={span}
            />
          )
        )}
      </div>
      <div
        className={
          activeId
            ? timelineOverlayVariants.active
            : timelineOverlayVariants.default
        }
      />
    </section>
  );
};
