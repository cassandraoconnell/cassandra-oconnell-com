import { createVar, style } from "@vanilla-extract/css";

export const heightVar = createVar();

export const camera = style({
  height: "100vh",
  position: "relative",
  width: "100vw",
});

export const scroller = style({
  height: heightVar,
  overflow: "scroll",
  width: "100%",
});
