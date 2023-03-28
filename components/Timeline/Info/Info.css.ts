import { createVar, style } from "@vanilla-extract/css";
import { spacing } from "@/style/tokens";

export const maskImage = createVar();

export const info = {
  container: style({
    marginLeft: "25%",
    position: "absolute",
    width: "50%",
  }),

  company: {
    container: style({
      alignItems: "center",
      display: "flex",
      gap: spacing.sm,
    }),

    logo: style({
      backgroundColor: "white",
      height: spacing.md,
      maskImage,
      maskPosition: "center",
      maskRepeat: "no-repeat",
      maskSize: "auto",
      width: spacing.md,
    }),
  },
};
