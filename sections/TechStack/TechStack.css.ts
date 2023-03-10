import { style } from "@vanilla-extract/css";
import { breakpoints, spacing } from "@/style/tokens";

export const technologies = style({
  margin: "auto",

  "@media": {
    [`screen and (max-width: ${breakpoints.medium})`]: {
      margin: 0,
    },
  },
});

export const techStack = style({
  alignItems: "center",
  borderColor: "rgba(255, 255, 255, 0.5)",
  display: "flex",
  paddingBottom: spacing.extraLarge,
  paddingTop: spacing.extraLarge,
  textAlign: "center",

  "@media": {
    [`screen and (max-width: ${breakpoints.medium})`]: {
      flexDirection: "column",
      justifyContent: "center",
    },

    [`screen and (max-width: ${breakpoints.small})`]: {
      alignItems: "flex-start",
      textAlign: "left",
    },
  },
});
