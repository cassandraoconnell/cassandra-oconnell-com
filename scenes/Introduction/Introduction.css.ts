import { transition } from "@/style/tokens";
import { style, styleVariants } from "@vanilla-extract/css";

export const introduction = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  margin: "auto",
  position: "relative",
  textAlign: "center",
  width: "75%",
  zIndex: 1,
});

const particles = style({
  transition: "0.5s",
});

export const particlesVariants = styleVariants({
  loaded: [particles, { opacity: 1.0 }],
  loading: [particles, { opacity: 0 }],
});
