import { colors } from "@/style/tokens";
import { style } from "@vanilla-extract/css";

export const divider = style({
  backgroundColor: colors.light,
  height: 1,
  opacity: 0.5,
  width: "100%",
});
