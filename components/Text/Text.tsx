import { useMemo } from "react";
import {
  text,
  textColorVariants,
  textSizeVariants,
  textWeightVariants,
} from "./Text.css";

interface TextProps {
  as: "h1" | "h2" | "h3" | "p" | "span";
  color: "dark" | "light";
  size: "large" | "small";
  weight: "bold" | "normal";
}

export const Text = ({
  as,
  children,
  color,
  size,
  weight,
}: React.PropsWithChildren<TextProps>) => {
  const As = as;

  const className = useMemo(() => {
    const classes = [text];

    switch (color) {
      case "dark":
        classes.push(textColorVariants.dark);
        break;
      case "light":
        classes.push(textColorVariants.light);
        break;
      default:
        break;
    }

    switch (size) {
      case "large":
        classes.push(textSizeVariants.large);
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
  }, [color, size, weight]);

  return <As className={className}>{children}</As>;
};
