import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colors, typography } from "@/style/tokens";

export const text = style({
  fontFamily: typography.fontFamily,
  margin: 0,
  padding: 0,
});

export const textColorVariants = styleVariants({
  accent: { color: colors.accent.base },
  dark: { color: colors.dark },
  light: { color: colors.light },
});

export const textSizeVariants = styleVariants({
  large: {
    fontSize: "3rem",
    lineHeight: "1",

    "@media": {
      [`screen and (max-width: ${breakpoints.medium})`]: {
        fontSize: "1.5rem",
      },
    },
  },
  small: { fontSize: "1rem", lineHeight: "1.7" },
});

export const textWeightVariants = styleVariants({
  bold: { fontWeight: "800" },
  normal: { fontWeight: "500" },
});
