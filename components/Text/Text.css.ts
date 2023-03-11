import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colors, typography } from "@/style/tokens";

export const text = style({
  margin: 0,
  padding: 0,
});

export const textColorVariants = styleVariants({
  accent: { color: colors.accent.base },
  dark: { color: colors.dark },
  light: { color: colors.light },
});

export const textFamilyVariants = styleVariants({
  mono: typography.mono,
  sans: typography.sans,
});

export const textSizeVariants = styleVariants({
  large: {
    fontSize: "2rem",
    lineHeight: "1.5",

    "@media": {
      [`screen and (max-width: ${breakpoints.medium})`]: {
        fontSize: "1.5rem",
      },
    },
  },
  medium: { fontSize: "1rem", lineHeight: "1.7" },
  small: { fontSize: "0.875rem", lineHeight: "1.7" },
});

export const textWeightVariants = styleVariants({
  bold: { fontWeight: "bold" },
  normal: { fontWeight: "normal" },
});
