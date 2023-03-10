import { Text } from "@/components/Text/Text";
import { Timeline } from "@/types/Timeline";
import { timeline } from "./Timeline.css";

interface TimelineProps {
  timeline: Timeline;
}

export const TimelineSection = (props: TimelineProps) => {
  console.log(props);

  return (
    <section className={timeline}>
      <Text as="h3" color="accent" family="sans" size="medium" weight="bold">
        Experience
      </Text>
      <Text as="h3" color="accent" family="sans" size="medium" weight="bold">
        Discovery
      </Text>
    </section>
  );
};
