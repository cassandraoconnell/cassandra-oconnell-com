import { createVar, style } from "@vanilla-extract/css";
import { spacing } from "@/style/tokens";

export const maskImage = createVar();
export const opacity = createVar();

export const info = {
  container: style({
    opacity,
    position: "absolute",
    width: "70%",
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
