import { Text } from "@/components/Text/Text";
import { skills } from "./Skills.css";

export const Skills = () => {
  return (
    <div className={skills}>
      <Text as="h1" color="light" size="large" weight="bold">
        Skills
      </Text>
    </div>
  );
};
