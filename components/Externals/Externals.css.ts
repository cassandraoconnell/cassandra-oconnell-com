import { style } from "@vanilla-extract/css";
import { spacing } from "@/style/tokens";

export const externals = style({
  display: "flex",
  gap: spacing.extraSmall,
  padding: `${spacing.medium}px 0`,
});
