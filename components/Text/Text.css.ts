import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colors, typography } from "@/style/tokens";

export const text = style({
  fontFamily: typography.fontFamily,
  margin: 0,
  padding: 0,
});

export const textColorVariants = styleVariants({
  primary: { color: colors.white },
  secondary: { color: colors.gray.light },
});

export const textSizeVariants = styleVariants({
  large: {
    fontSize: 128,
    lineHeight: 1,

    "@media": {
      [`screen and (max-width: ${breakpoints.xl}px)`]: {
        fontSize: 112,
      },

      [`screen and (max-width: ${breakpoints.lg}px)`]: {
        fontSize: 96,
      },

      [`screen and (max-width: ${breakpoints.md}px)`]: {
        fontSize: 80,
      },

      [`screen and (max-width: ${breakpoints.sm}px)`]: {
        fontSize: 64,
      },

      [`screen and (max-width: ${breakpoints.xs}px)`]: {
        fontSize: 40,
      },

      [`screen and (max-width: ${breakpoints.xxs}px)`]: {
        fontSize: 24,
      },
    },
  },

  medium: {
    fontSize: 44,
    lineHeight: "1.2",

    "@media": {
      [`screen and (max-width: ${breakpoints.xl}px)`]: {
        fontSize: 40,
      },

      [`screen and (max-width: ${breakpoints.lg}px)`]: {
        fontSize: 36,
      },

      [`screen and (max-width: ${breakpoints.md}px)`]: {
        fontSize: 32,
      },

      [`screen and (max-width: ${breakpoints.sm}px)`]: {
        fontSize: 28,
      },

      [`screen and (max-width: ${breakpoints.xs}px)`]: {
        fontSize: 24,
      },

      [`screen and (max-width: ${breakpoints.xxs}px)`]: {
        fontSize: 20,
      },
    },
  },
  small: {
    fontSize: 20,
    lineHeight: "1.5",

    "@media": {
      [`screen and (max-width: ${breakpoints.xl}px)`]: {
        fontSize: 18,
      },

      [`screen and (max-width: ${breakpoints.lg}px)`]: {
        fontSize: 16,
      },

      [`screen and (max-width: ${breakpoints.md}px)`]: {
        fontSize: 14,
      },

      [`screen and (max-width: ${breakpoints.sm}px)`]: {
        fontSize: 12,
      },

      [`screen and (max-width: ${breakpoints.xs}px)`]: {
        fontSize: 12,
      },

      [`screen and (max-width: ${breakpoints.xxs}px)`]: {
        fontSize: 12,
      },
    },
  },
});

export const textWeightVariants = styleVariants({
  bold: { fontWeight: "900" },
  normal: { fontWeight: "400" },
});
