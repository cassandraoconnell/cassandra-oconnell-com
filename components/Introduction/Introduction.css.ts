import { createVar, style } from "@vanilla-extract/css";
import { breakpoints, spacing } from "@/style/tokens";
import { border } from "@/style/primitives/border.css";

export const headlineHeight = createVar();

export const introduction = {
  headline: {
    container: style({
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: headlineHeight,
      justifyContent: "center",
      overflowX: "hidden",
      position: "relative",
      textAlign: "center",
    }),
    name: style({
      top: spacing.md,
      position: "absolute",
    }),
  },

  gradient: style({}),

  lede: {
    container: style({
      margin: "auto",
      width: "85%",
    }),

    text: style([
      border.right,
      {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: spacing.md,
        padding: `${spacing.lg}px ${spacing.md}px ${spacing.lg}px 0`,
        width: "50%",

        "@media": {
          [`screen and (max-width: ${breakpoints.sm}px)`]: {
            borderRightStyle: "none",
            paddingRight: 0,
            textAlign: "center",
            width: "100%",
          },
        },
      },
    ]),
  },
};
