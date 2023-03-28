import { useEffect, useMemo, useRef, useState } from "react";
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

interface TimelineProps {
  history: History;
}

export const Timeline = ({ history }: TimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const view = useView();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const renderer = useMemo(() => {
    return new TimelineRenderer({ history });
  }, [history]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const top = scrollContainerRef.current.offsetTop;

      if (view.scroll >= top) {
        const timelineScroll = view.scroll - top;
        setActiveIndex(Math.ceil(timelineScroll / view.height) - 1);
      }
    }
  }, [view.height, view.scroll]);

  return (
    <div
      className={timeline.scrollContainer}
      ref={scrollContainerRef}
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
            {renderer.years.map((year) => (
              <div
                className={timeline.ticks.tick}
                data-year={year}
                key={year}
              />
            ))}
            {renderer.blocks.map((block, index) => (
              <Block
                key={`${block.top}-${block.bottom}`}
                isActive={activeIndex === index}
                {...block}
              />
            ))}
          </>
        </div>
        <div className={timeline.info}>
          {renderer.info.map((info, index) => (
            <Info key={info.span} opacity={index === 0 ? 1 : 0} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
};
