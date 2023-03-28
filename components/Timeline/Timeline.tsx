import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useView } from "@/components/View/View";
import { History } from "@/types/History";
import {
  containerHeight,
  scrollContainerHeight,
  timeline,
} from "./Timeline.css";
import { TimelineRenderer } from "./Timeline.helpers";
import { Block } from "./Block/Block";
import { Info } from "./Info/Info";
import { useMemo } from "react";

interface TimelineProps {
  history: History;
}

export const Timeline = ({ history }: TimelineProps) => {
  const view = useView();

  const renderer = useMemo(() => {
    return new TimelineRenderer({ history });
  }, [history]);

  return (
    <div
      className={timeline.scrollContainer}
      style={assignInlineVars({
        [scrollContainerHeight]: `${view.height * history.experience.length}px`,
      })}
    >
      <div
        className={timeline.container}
        style={assignInlineVars({
          [containerHeight]: `${view.height}px`,
        })}
      >
        <div className={timeline.ticks.container}>
          <>
            {renderer.blocks.map((block) => (
              <Block key={`${block.top}-${block.bottom}`} {...block} />
            ))}
            {renderer.years.map((year) => (
              <div
                className={timeline.ticks.tick}
                data-year={year}
                key={year}
              />
            ))}
          </>
        </div>
        <div className={timeline.info}>
          {renderer.info.map((info) => (
            <Info key={info.span} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
};
