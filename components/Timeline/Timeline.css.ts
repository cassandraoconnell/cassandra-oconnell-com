import { createVar, style } from "@vanilla-extract/css";
import { colors, spacing } from "@/style/tokens";
import { border } from "@/style/primitives/border.css";
import { text } from "@/style/primitives/text.css";

export const height = createVar();

export const timeline = {
  container: style([
    border.left,
    {
      height,
      position: "relative",
    },
  ]),

  ticks: {
    container: style({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      position: "absolute",
    }),

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
