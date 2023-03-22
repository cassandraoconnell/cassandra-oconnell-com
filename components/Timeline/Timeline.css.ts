import { spacing } from "@/style/tokens";
import { style } from "@vanilla-extract/css";

export const timeline = {
  container: style({
    height: "100%",
    position: "relative",
  }),
  lines: {
    container: style({
      columnGap: spacing.extraSmall,
      display: "grid",
      gridTemplateColumns: `${spacing.medium}px 1fr`,
      height: "100%",
      position: "absolute",
      justifyContent: "space-between",
    }),

    year: style({
      height: "fit-content",
      transform: "translateY(-50%)",
    }),
  },
};
