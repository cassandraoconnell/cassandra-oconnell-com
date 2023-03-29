import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  height: "100%",
  overflow: "hidden",
  position: "absolute",
  transition: "0.5s",
  width: "100%",
});

export const particles = styleVariants({
  loaded: [base, { opacity: 1 }],
  loading: [base, { opacity: 0 }],
});
