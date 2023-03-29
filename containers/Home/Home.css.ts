import { border } from "@/style/primitives/border.css";
import { spacing } from "@/style/tokens";
import { style } from "@vanilla-extract/css";

export const home = {
  contact: {
    container: style({
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      position: "relative",
      textAlign: "center",
    }),
    connect: {
      container: style({
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: spacing.xl,
        justifyContent: "center",
        width: "100%",
      }),

      details: {
        container: style({
          display: "flex",
          flexDirection: "column",
          gap: spacing.lg,
          width: "50%",
        }),
        item: {
          container: style({
            display: "grid",
            gridTemplateColumns: "50% 50%",
            textAlign: "left",
            width: "100%",
          }),
          list: style({
            display: "flex",
            flexDirection: "column",
            gap: spacing.xs,
          }),
        },
      },
    },
    footer: style([
      border.top,
      {
        boxSizing: "border-box",
        padding: `${spacing.md}px ${spacing.sm}px`,
      },
    ]),
  },
  description: style({
    margin: "auto",
    width: "85%",
  }),
};
