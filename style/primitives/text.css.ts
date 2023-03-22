import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colors } from "@/style/tokens";

const base = style({
  color: colors.white,
  fontFamily: "var(--font)",
  margin: 0,
  padding: 0,
});

const size = styleVariants({
  lg: {
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

  md: {
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
  sm: {
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

const weight = styleVariants({
  bold: { fontWeight: "900" },
  regular: { fontWeight: "400" },
});

export const text = styleVariants({
  primary: [base, size.lg, weight.bold],
  secondary: [base, size.lg, weight.regular],
  tertiary: [base, size.md, weight.bold],
  quaternary: [base, size.md, weight.regular],
  quinary: [base, size.sm, weight.bold],
  senary: [base, size.sm, weight.regular],
});
