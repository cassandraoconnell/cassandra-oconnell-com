import { Text } from "@/components/Text/Text";
import { technologies, techStackSection } from "./TechStack.css";

export const TechStackSection = () => {
  return (
    <section className={techStackSection}>
      <Text as="h3" color="accent" family="sans" size="medium" weight="bold">
        Tech Stack
      </Text>
      <div className={technologies}>
        <Text
          as="span"
          color="light"
          family="mono"
          size="small"
          weight="normal"
        >
          React, NextJS, Javascript, Typescript, Rust, WebAssembly, WebGL, Git
        </Text>
      </div>
    </section>
  );
};
