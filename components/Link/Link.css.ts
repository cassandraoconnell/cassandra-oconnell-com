import { colors, transition } from "@/style/tokens";
import { style } from "@vanilla-extract/css";

export const link = style({
  color: colors.accent.base,
  textDecoration: "none",
  transition: transition.duration,

  ":hover": {
    color: colors.accent.dark,
  },
});
