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

  return (
    <div className={timeline.container}>
      <div className={timeline.ticks.container}>
        {years.map((year) => (
          <div className={timeline.ticks.tick} data-year={year} key={year} />
        ))}
      </div>
      {/* {history.experience.map(() => (
        // TODO
      ))} */}
    </div>
  );
};
