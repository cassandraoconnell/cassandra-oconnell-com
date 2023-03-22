import { Line } from "@/components/Line/Line";
import { Text } from "@/components/Text/Text";
import { useView } from "@/components/View/View";
import { History } from "@/types/History";
import { timeline } from "./Timeline.css";
import { getYears } from "./Timeline.helpers";

interface TimelineProps {
  history: History;
}

export const Timeline = ({ history }: TimelineProps) => {
  const view = useView();
  const years = getYears({ history });
  console.log(years);

  return (
    <div className={timeline.container}>
      <div className={timeline.lines.container}>
        {/* {years.map((year) => (
          <>
            <Line direction="horizontal" />
            <span className={timeline.lines.year}>
              <Text as="span" color="secondary" size="small" weight="normal">
                {year}
              </Text>
            </span>
          </>
        ))} */}
      </div>
    </div>
  );
};
