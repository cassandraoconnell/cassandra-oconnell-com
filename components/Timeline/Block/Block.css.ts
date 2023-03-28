import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { colors, spacing } from "@/style/tokens";

export const bottom = createVar();
export const top = createVar();

const base = style({
  bottom,
  borderBottomStyle: "solid",
  borderColor: colors.black,
  borderTopStyle: "solid",
  borderWidth: 2,
  left: 0,
  position: "absolute",
  top,
  transition: "0.2s",
});

export const block = styleVariants({
  active: [base, { backgroundColor: colors.white, width: spacing.sm }],
  inactive: [base, { backgroundColor: colors.gray.dark, width: spacing.xs }],
});
