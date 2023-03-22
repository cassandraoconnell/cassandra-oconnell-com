import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "../tokens";

const base = style({
  borderColor: colors.gray.dark,
  borderWidth: 1,
});

export const border = styleVariants({
  bottom: [base, { borderBottomStyle: "solid" }],
  left: [base, { borderLeftStyle: "solid" }],
  right: [base, { borderRightStyle: "solid" }],
  top: [base, { borderTopStyle: "solid" }],
});
