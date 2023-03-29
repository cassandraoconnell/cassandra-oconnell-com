import { useEffect, useMemo, useRef, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useView } from "@/components/View/View";
import { History } from "@/types/History";
import { scrollHeight, timeline, viewHeight } from "./Timeline.css";
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
      className={timeline.scroll.container}
      ref={scrollContainerRef}
      style={assignInlineVars({
        [scrollHeight]: `${view.height * history.experience.length}px`,
      })}
    >
      <div
        className={timeline.view.container}
        style={assignInlineVars({
          [viewHeight]: `${view.height}px`,
        })}
      >
        <div className={timeline.view.content.container}>
          <Info {...renderer.info[activeIndex]} />
          <div className={timeline.view.content.ticks.container}>
            <>
              {renderer.years.map((year) => (
                <div
                  className={timeline.view.content.ticks.tick}
                  data-year={year}
                  key={year}
                />
              ))}
              {renderer.blocks.map((block, index) => (
                <Block
                  key={`${block.left}-${block.right}`}
                  isActive={activeIndex === index}
                  {...block}
                />
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
