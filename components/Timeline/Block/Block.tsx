import { assignInlineVars } from "@vanilla-extract/dynamic";
import { bottom, block, top } from "./Block.css";

export interface BlockProps {
  bottom: string;
  top: string;
}

export const Block = (props: BlockProps) => {
  return (
    <div
      className={block}
      style={assignInlineVars({
        [bottom]: props.bottom,
        [top]: props.top,
      })}
    />
  );
};
