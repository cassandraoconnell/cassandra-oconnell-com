import { style, styleVariants } from "@vanilla-extract/css";
import { colors, spacing, transition } from "@/style/tokens";

const header = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  transition: transition.duration,
  zIndex: 1,
});

export const headerVariants = styleVariants({
  loose: [
    header,
    {
      backgroundColor: colors.dark,
      paddingBottom: spacing.medium,
      paddingTop: spacing.medium,
    },
  ],
  stuck: [
    header,
    {
      backgroundColor: colors.light,
      paddingBottom: spacing.small,
      paddingTop: spacing.small,
    },
  ],
});

export const links = style({
  display: "flex",
  gap: spacing.extraSmall,
});

export const sentry = style({
  backgroundColor: "transparent",
  height: 10,
  position: "absolute",
  top: "100vh",
  width: 10,
});
