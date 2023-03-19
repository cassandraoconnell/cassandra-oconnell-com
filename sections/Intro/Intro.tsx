import { Text } from "@/components/Text/Text";
import { introSection } from "./Intro.css";

export const IntroSection = () => {
  return (
    <section className={introSection}>
      <Text as="h1" color="light" size="large" weight="normal">
        I’m a software engineer focused on{" "}
        <Text as="span" color="light" size="large" weight="bold">
          well-architected and performance-optimized web apps{" "}
        </Text>
        that are just as reliable as they are engaging.
      </Text>
    </section>
  );
};
