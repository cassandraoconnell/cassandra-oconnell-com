import { style } from "@vanilla-extract/css";
import { spacing } from "@/style/tokens";

export const header = style({
  alignItems: "center",
  display: "flex",
  left: 0,
  paddingBottom: spacing.medium,
  paddingTop: spacing.medium,
  position: "sticky",
  top: 0,
});
