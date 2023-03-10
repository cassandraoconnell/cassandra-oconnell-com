import { Roboto_Mono, Rubik } from "next/font/google";
import { useMemo } from "react";
import {
  text,
  textColorVariants,
  textSizeVariants,
  textWeightVariants,
} from "./Text.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

interface TextProps {
  as: "h1" | "h2" | "h3" | "p" | "span";
  color: "accent" | "dark" | "light";
  family: "mono" | "sans";
  size: "large" | "medium" | "small";
  weight: "bold" | "normal";
}

export const Text = ({
  as,
  children,
  color,
  family,
  size,
  weight,
}: React.PropsWithChildren<TextProps>) => {
  const As = as;

  const className = useMemo(() => {
    const classes = [text];

    switch (color) {
      case "accent":
        classes.push(textColorVariants.accent);
        break;
      case "dark":
        classes.push(textColorVariants.dark);
        break;
      case "light":
        classes.push(textColorVariants.light);
        break;
      default:
        break;
    }

    switch (family) {
      case "mono":
        classes.push(roboto.className);
        break;
      case "sans":
        classes.push(rubik.className);
        break;
      default:
        break;
    }

    switch (size) {
      case "large":
        classes.push(textSizeVariants.large);
        break;
      case "medium":
        classes.push(textSizeVariants.medium);
        break;
      case "small":
        classes.push(textSizeVariants.small);
        break;
      default:
        break;
    }

    switch (weight) {
      case "bold":
        classes.push(textWeightVariants.bold);
        break;
      case "normal":
        classes.push(textWeightVariants.normal);
        break;
      default:
        break;
    }

    return classes.join(" ");
  }, [color, family, size, weight]);

  return <As className={className}>{children}</As>;
};
