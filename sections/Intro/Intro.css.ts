import { style } from "@vanilla-extract/css";
import { breakpoints, spacing } from "@/style/tokens";

export const intro = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.extraLarge,
  justifyContent: "center",
  margin: "auto",
  paddingBottom: spacing.extraLarge,
  paddingTop: spacing.extraLarge,
  textAlign: "center",

  "@media": {
    [`screen and (min-width: ${breakpoints.medium})`]: {
      width: "50%",
    },

    [`screen and (max-width: ${breakpoints.medium})`]: {
      gap: spacing.large,
      paddingBottom: spacing.large,
      paddingTop: spacing.large,
    },

    [`screen and (max-width: ${breakpoints.small})`]: {
      textAlign: "left",
    },
  },
});
