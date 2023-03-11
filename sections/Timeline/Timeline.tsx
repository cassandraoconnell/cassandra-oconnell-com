import { Text } from "@/components/Text/Text";
import { Timeline } from "@/types/Timeline";
import {
  discovery,
  experience,
  timelineSection,
  timelineSpan,
  timelineYear,
  timelineYears,
} from "./Timeline.css";
import { getYears, getYearSpans, getYearsReversed } from "./Timeline.utilities";

interface TimelineProps {
  timeline: Timeline;
}

export const TimelineSection = ({ timeline }: TimelineProps) => {
  const years = getYears({ timeline });
  const yearsReversed = getYearsReversed({ years });
  const spans = getYearSpans({
    experiences: timeline.experiences,
    years,
    yearsReversed,
  });

  return (
    <section className={timelineSection}>
      <div className={experience}>
        <Text as="h3" color="accent" family="sans" size="medium" weight="bold">
          Experience
        </Text>
      </div>
      <div className={timelineYears}>
        {yearsReversed.map((year) => (
          <div className={timelineYear} data-year={year} key={year} />
        ))}
        {spans.map((span) => (
          <div
            className={timelineSpan}
            key={`${span.top}-${span.bottom}`}
            style={{ bottom: span.bottom, top: span.top }}
          />
        ))}
      </div>

      <div className={discovery}>
        <Text as="h3" color="accent" family="sans" size="medium" weight="bold">
          Discovery
        </Text>
      </div>
    </section>
  );
};
