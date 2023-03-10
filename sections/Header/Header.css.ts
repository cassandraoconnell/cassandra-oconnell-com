import { style, styleVariants } from "@vanilla-extract/css";
import { colors, spacing, transition } from "@/style/tokens";

const header = style({
  alignItems: "center",
  display: "flex",
  position: "sticky",
  top: 0,
  transition: transition.duration,
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
