import { createVar, style } from "@vanilla-extract/css";
import { colors, spacing } from "@/style/tokens";

export const bottom = createVar();
export const top = createVar();

export const block = style({
  bottom,
  borderBottomStyle: "solid",
  borderColor: colors.black,
  borderTopStyle: "solid",
  borderWidth: 2,
  backgroundColor: colors.gray.dark,
  left: 0,
  position: "absolute",
  top,
  width: spacing.xs,
});
