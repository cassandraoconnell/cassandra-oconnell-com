import { Text } from "@/components/Text/Text";
import { intro } from "./Intro.css";

export const Intro = () => {
  return (
    <section className={intro}>
      <Text as="h1" color="light" family="mono" size="large" weight="normal">
        I’m a software engineer focused on{" "}
        <Text as="span" color="accent" family="mono" size="large" weight="bold">
          well-architected and performant web apps{" "}
        </Text>
        that are just as reliable as they are engaging.
      </Text>
      <Text as="p" color="light" family="sans" size="medium" weight="normal">
        I love a technical challenge and thrive solving unique software
        problems. My code is clean and maintainable and I make sure to write
        coherent tests to accompany it.
      </Text>
    </section>
  );
};
