import { createVar, style } from "@vanilla-extract/css";
import { colors, spacing } from "@/style/tokens";
import { border } from "@/style/primitives/border.css";
import { text } from "@/style/primitives/text.css";

export const containerHeight = createVar();
export const scrollContainerHeight = createVar();

export const timeline = {
  container: style({
    height: "100vh",
    padding: `${spacing.md}px 0`,
    position: "sticky",
    top: 0,
  }),

  info: style({
    position: "relative",
  }),

  scrollContainer: style({
    height: scrollContainerHeight,
  }),

  ticks: {
    container: style([
      border.left,
      {
        display: "flex",
        flexDirection: "column",
        height: containerHeight,
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
      },
    ]),

    tick: style([
      border.bottom,
      text.senary,
      {
        color: colors.gray.light,
        position: "relative",
        width: spacing.md,

        "::after": {
          content: "attr(data-year)",
          left: `calc(100% + ${spacing.xs}px)`,
          lineHeight: 1,
          position: "absolute",
          transform: "translateY(-50%)",
        },
      },
    ]),
  },
};
