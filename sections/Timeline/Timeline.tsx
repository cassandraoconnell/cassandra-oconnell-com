import { Text } from "@/components/Text/Text";
import { timeline } from "./Timeline.css";

export const Timeline = () => {
  return (
    <section className={timeline}>
      <Text as="h3" color="accent" family="sans" size="medium" weight="bold">
        Experience
      </Text>
      <Text as="h3" color="accent" family="sans" size="medium" weight="bold">
        Discovery
      </Text>
    </section>
  );
};
