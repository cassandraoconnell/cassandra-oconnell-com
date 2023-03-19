import { createVar, style } from "@vanilla-extract/css";

export const opacityVar = createVar();

export const scene = style({
  bottom: 0,
  left: 0,
  opacity: opacityVar,
  position: "fixed",
  right: 0,
  top: 0,
});
