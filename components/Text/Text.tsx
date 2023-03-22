import { useMemo } from "react";
import {
  text,
  textColorVariants,
  textSizeVariants,
  textWeightVariants,
} from "./Text.css";

interface TextProps {
  as: "h1" | "h2" | "h3" | "p" | "span";
  color: "primary" | "secondary";
  size: "large" | "medium" | "small";
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
      case "primary":
        classes.push(textColorVariants.primary);
        break;
      case "secondary":
        classes.push(textColorVariants.secondary);
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
  }, [color, size, weight]);

  return <As className={className}>{children}</As>;
};
