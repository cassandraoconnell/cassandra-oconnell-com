import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  height: "100%",
  overflow: "hidden",
  position: "absolute",
  width: "100%",
});

export const particles = styleVariants({
  loaded: [base],
  loading: [base],
});
