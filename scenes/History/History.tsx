import { useState } from "react";
import { Text } from "@/components/Text/Text";
import { Timeline } from "@/types/Timeline";
import { history } from "./History.css";
import {
  getExperienceRenderData,
  getYears,
  getYearsReversed,
} from "./History.utilities";

interface HistoryProps {
  timeline: Timeline;
}

export const History = ({ timeline }: HistoryProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const years = getYears({ timeline });
  const yearsReversed = getYearsReversed({ years });
  const experienceRenderData = getExperienceRenderData({
    experiences: timeline.experiences,
    years,
    yearsReversed,
  });

  return (
    <div className={history}>
      <Text as="h1" color="light" size="large" weight="bold">
        History
      </Text>
    </div>
  );
};
