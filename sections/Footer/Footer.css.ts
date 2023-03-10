import { style } from "@vanilla-extract/css";
import { breakpoints, colors, spacing } from "@/style/tokens";

export const footer = style({
  alignItems: "center",
  backgroundColor: colors.light,
  display: "flex",
  gap: spacing.extraLarge,
  paddingBottom: spacing.large,
  paddingTop: spacing.large,
  justifyContent: "space-between",

  "@media": {
    [`screen and (max-width: ${breakpoints.medium})`]: {
      alignItems: "center",
      flexDirection: "column",
      gap: spacing.large,
      justifyContent: "center",
      textAlign: "center",
    },

    [`screen and (max-width: ${breakpoints.small})`]: {
      alignItems: "flex-start",
      gap: spacing.large,
      justifyContent: "center",
      textAlign: "left",
    },
  },
});
