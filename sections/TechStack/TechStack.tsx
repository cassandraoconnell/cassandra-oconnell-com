import { Text } from "@/components/Text/Text";
import { technologies, techStack } from "./TechStack.css";

export const TechStack = () => {
  return (
    <section className={techStack}>
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
