import { style } from "@vanilla-extract/css";
import { colors, spacing } from "@/style/tokens";

export const block = style({
  backgroundColor: colors.gray.dark,
  height: 100, // TODO
  left: 0,
  position: "absolute",
  top: 0,
  width: spacing.xs,
});
