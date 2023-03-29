import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { colors, spacing } from "@/style/tokens";

export const left = createVar();
export const right = createVar();

const base = style({
  bottom: 0,
  borderColor: colors.black,
  borderLeftStyle: "solid",
  borderRightStyle: "solid",
  borderWidth: 2,
  left,
  position: "absolute",
  right,
  transition: "0.2s",
});

export const block = styleVariants({
  active: [base, { backgroundColor: colors.white, height: spacing.sm }],
  inactive: [base, { backgroundColor: colors.gray.dark, height: spacing.xs }],
});
