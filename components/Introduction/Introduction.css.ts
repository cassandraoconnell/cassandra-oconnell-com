import { style } from "@vanilla-extract/css";
import { spacing } from "@/style/tokens";

export const introduction = {
  container: style({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    overflowX: "hidden",
    position: "relative",
    textAlign: "center",
  }),
  name: style({
    top: spacing.md,
    position: "absolute",
  }),
};
