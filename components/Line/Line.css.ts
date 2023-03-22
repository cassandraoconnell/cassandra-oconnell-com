import { colors } from "@/style/tokens";
import { style, styleVariants } from "@vanilla-extract/css";

const line = style({
  backgroundColor: colors.gray.dark,
});

export const lineVariants = styleVariants({
  horizontal: [line, { height: 1, width: "100%" }],
  vertical: [line, { height: "100%", width: 1 }],
});
