import { assignInlineVars } from "@vanilla-extract/dynamic";
import { block, left, right } from "./Block.css";

export interface BlockProps {
  left: string;
  right: string;
}

export const Block = (props: BlockProps & { isActive: boolean }) => {
  return (
    <div
      className={props.isActive ? block.active : block.inactive}
      style={assignInlineVars({
        [left]: props.left,
        [right]: props.right,
      })}
    />
  );
};
