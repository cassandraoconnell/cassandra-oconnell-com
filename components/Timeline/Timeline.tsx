import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useView } from "@/components/View/View";
import { History } from "@/types/History";
import { height, timeline } from "./Timeline.css";
import { getYears } from "./Timeline.helpers";
import { Node } from "./Node/Node";

interface TimelineProps {
  history: History;
}

export const Timeline = ({ history }: TimelineProps) => {
  const view = useView();
  const years = getYears({ history });

  return (
    <div
      className={timeline.container}
      style={assignInlineVars({ [height]: `${view.height}px` })}
    >
      <div className={timeline.ticks.container}>
        {years.map((year) => (
          <div className={timeline.ticks.tick} data-year={year} key={year} />
        ))}
      </div>
      <Node experience={history.experience[0]} />
    </div>
  );
};
