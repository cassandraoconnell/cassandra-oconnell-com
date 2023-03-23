import { createVar, style } from "@vanilla-extract/css";
import { spacing } from "@/style/tokens";

export const maskImage = createVar();

export const node = {
  container: style({
    height: "100%",
    width: "100%",
  }),

  info: {
    container: style({
      marginLeft: "25%",
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
  },
};
