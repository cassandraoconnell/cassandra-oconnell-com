import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import {
  textColorVariants,
  textFamilyVariants,
  textSizeVariants,
  textWeightVariants,
} from "@/components/Text/Text.css";
import { colors, spacing, transition } from "@/style/tokens";
import { YEAR_HEIGHT } from "./Timeline.utilities";

const timelineOverlay = style({
  backgroundColor: colors.dark,
  bottom: 0,
  left: 0,
  pointerEvents: "none",
  position: "absolute",
  right: 0,
  top: 0,
  transition: transition.duration,
});

globalStyle(`${timelineOverlay} > *`, { pointerEvents: "auto" });

export const timelineOverlayVariants = styleVariants({
  active: [timelineOverlay, { opacity: 0.5 }],
  default: [timelineOverlay, { opacity: 0 }],
});

export const timelineSection = style({
  display: "flex",
  paddingBottom: spacing.extraLarge,
  paddingTop: spacing.extraLarge,
  position: "relative",
  zIndex: 0,
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
    margin: "auto",
    opacity: 0.25,
    width: spacing.large,

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
  width: "100%",

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
