import { lineVariants } from "./Line.css";

interface LineProps {
  direction: "horizontal" | "vertical";
}

export const Line = ({ direction }: LineProps) => {
  return (
    <div
      className={
        direction === "horizontal"
          ? lineVariants.horizontal
          : lineVariants.vertical
      }
    />
  );
};
