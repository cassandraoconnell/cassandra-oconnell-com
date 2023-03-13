import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { colors, spacing, transition } from "@/style/tokens";

const experience = style({
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  gap: spacing.extraSmall,
  position: "absolute",
  transition: transition.duration,
  width: "50%",
});

const experienceVariants = styleVariants({
  active: [experience, { backgroundColor: colors.accent.base }],
  default: [experience],
});

const experienceBottom = style({
  flexDirection: "column",
  padding: `${spacing.small}px ${spacing.small}px ${spacing.large}px ${spacing.small}px`,
  transform: "translateY(100%)",
});

export const experienceBottomVariants = styleVariants({
  active: [experienceVariants.active, experienceBottom, { zIndex: 1 }],
  default: [experienceVariants.default, experienceBottom],
});

const experienceTop = style([
  experience,
  {
    alignItems: "center",
    padding: spacing.small,
    width: "50%",
  },
]);

export const experienceTopVariants = styleVariants({
  active: [experienceVariants.active, experienceTop, { zIndex: 1 }],
  default: [experienceVariants.default, experienceTop],
});

const experienceLine = style({
  height: 1,
  position: "absolute",
  width: "50%",
});

export const experienceLineVariants = styleVariants({
  active: [experienceLine, { backgroundColor: colors.accent.dark, zIndex: 1 }],
  default: [experienceLine, { backgroundColor: colors.accent.base }],
});

export const experienceLogoUrlVar = createVar();

const experienceLogo = style({
  backgroundColor: "white",
  height: spacing.small,
  maskImage: experienceLogoUrlVar,
  maskPosition: "center",
  maskRepeat: "no-repeat",
  maskSize: "auto",
  transition: transition.duration,
  width: spacing.small,
});

export const experienceLogoVariants = styleVariants({
  active: [experienceLogo, { backgroundColor: colors.dark }],
  default: [experienceLogo, { backgroundColor: colors.light }],
});

const experienceSpan = style({
  backgroundColor: colors.accent.base,
  cursor: "pointer",
  left: "50%",
  position: "absolute",
  transform: "translateX(-50%)",
  transition: transition.duration,
  width: spacing.extraSmall,
});

export const experienceSpanVariants = styleVariants({
  active: [experienceSpan, { width: spacing.small }],
  default: [experienceSpan, { width: spacing.extraSmall }],
});

const experienceExtraInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.extraSmall,
  transition: transition.duration,
});

export const experienceExtraInfoVariants = styleVariants({
  active: [experienceExtraInfo, { opacity: 1 }],
  default: [experienceExtraInfo, { opacity: 0 }],
});
