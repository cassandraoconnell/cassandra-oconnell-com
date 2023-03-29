import { createVar, style } from "@vanilla-extract/css";
import { breakpoints, spacing } from "@/style/tokens";

export const maskImage = createVar();

export const info = {
  span: style({
    "@media": {
      [`screen and (max-width: ${breakpoints.sm}px)`]: {
        textAlign: "center",
      },
    },
  }),

  details: {
    container: style({
      display: "flex",
      flexDirection: "column",
      gap: spacing.sm,
      marginLeft: "50%",
      width: "50%",

      "@media": {
        [`screen and (max-width: ${breakpoints.sm}px)`]: {
          marginLeft: 0,
          textAlign: "center",
          width: "100%",
        },
      },
    }),

    company: {
      container: style({
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: spacing.sm,

        "@media": {
          [`screen and (max-width: ${breakpoints.sm}px)`]: {
            flexDirection: "column",
            gap: spacing.xs,
            marginLeft: 0,
            textAlign: "center",
            width: "100%",
          },
        },
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
