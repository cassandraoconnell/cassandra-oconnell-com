import { style } from "@vanilla-extract/css";
import {
  textColorVariants,
  textFamilyVariants,
  textSizeVariants,
  textWeightVariants,
} from "@/components/Text/Text.css";
import { colors, spacing } from "@/style/tokens";
import { YEAR_HEIGHT } from "./Timeline.utilities";

export const discovery = style({
  flex: 2,
  textAlign: "right",
});

export const experience = style({
  flex: 2,
});

export const timelineSection = style({
  display: "flex",
  paddingBottom: spacing.extraLarge,
  paddingTop: spacing.extraLarge,
  position: "relative",
});

export const timelineSpan = style({
  backgroundColor: colors.accent.base,
  left: "50%",
  position: "absolute",
  transform: "translateX(-50%)",
  width: spacing.extraSmall,

  top: 100,
  bottom: 400,
});

export const timelineYear = style([
  textColorVariants.light,
  textFamilyVariants.mono,
  textSizeVariants.small,
  textWeightVariants.normal,
  {
    borderBottom: `1px dotted ${colors.light}`,
    height: YEAR_HEIGHT - 1,
    position: "relative",
    opacity: 0.25,

    "::after": {
      content: "attr(data-year)",
      left: "100%",
      margin: `0 ${spacing.extraSmall}px`,
      position: "absolute",
      top: "100%",
      transform: "translateY(-50%)",
    },
  },
]);

export const timelineYears = style({
  height: "100%",
  position: "relative",
  width: spacing.large,

  "::before": {
    borderRight: `1px dotted ${colors.light}`,
    bottom: 0,
    content: "",
    opacity: 0.25,
    position: "absolute",
    right: `calc(50% - 1px)`,
    top: 0,
  },
});
