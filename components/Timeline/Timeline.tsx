import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useView } from "@/components/View/View";
import { History } from "@/types/History";
import { height, timeline } from "./Timeline.css";
import { getYears, getYearsReversed } from "./Timeline.helpers";
import { Block } from "./Block/Block";
import { Info } from "./Info/Info";

interface TimelineProps {
  history: History;
}

export const Timeline = ({ history }: TimelineProps) => {
  const view = useView();
  const years = getYears({ history });
  const yearsReversed = getYearsReversed({ years });

  return (
    <div
      className={timeline.container}
      style={assignInlineVars({
        [height]: `${view.height * history.experience.length}px`,
      })}
    >
      <div className={timeline.ticks.container}>
        <>
          {yearsReversed.map((year) => (
            <div className={timeline.ticks.tick} data-year={year} key={year} />
          ))}
          {history.experience.map((experience) => (
            <Block key={experience.start} />
          ))}
        </>
      </div>
      <Info experience={history.experience[0]} />
    </div>
  );
};
