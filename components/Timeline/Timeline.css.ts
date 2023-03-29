import { createVar, style } from "@vanilla-extract/css";
import { colors, spacing } from "@/style/tokens";
import { border } from "@/style/primitives/border.css";
import { text } from "@/style/primitives/text.css";

export const scrollHeight = createVar();
export const viewHeight = createVar();

export const timeline = {
  scroll: {
    container: style({
      height: scrollHeight,
    }),
  },

  view: {
    container: style({
      alignItems: "center",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      height: viewHeight,
      justifyContent: "center",
      position: "sticky",
      top: 0,
    }),

    content: {
      container: style({
        display: "flex",
        flexDirection: "column",
        height: "75%",
        justifyContent: "space-between",
        position: "relative",
        width: "100%",
      }),

      ticks: {
        container: style([
          border.bottom,
          {
            borderBottomStyle: "dashed",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          },
        ]),

        tick: style([
          border.right,
          text.senary,
          {
            borderRightStyle: "dashed",
            color: colors.gray.light,
            height: spacing.md,
            position: "relative",

            "::after": {
              content: "attr(data-year)",
              bottom: `calc(100% + ${spacing.xs}px)`,
              lineHeight: 1,
              position: "absolute",
              transform: "translateX(-50%)",
            },
          },
        ]),
      },
    },
  },
};
