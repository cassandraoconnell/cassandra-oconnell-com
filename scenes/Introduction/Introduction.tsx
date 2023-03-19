import { Externals } from "@/components/Externals/Externals";
import { Name } from "@/components/Name/Name";
import { Text } from "@/components/Text/Text";
import { introduction } from "./Introduction.css";

export const Introduction = () => {
  return (
    <div className={introduction}>
      <Name />
      <Text as="h1" color="light" size="large" weight="normal">
        I’m a software engineer focused on{" "}
        <Text as="span" color="light" size="large" weight="bold">
          well-architected and performance-optimized web apps{" "}
        </Text>
        that are just as reliable as they are engaging.
      </Text>
      <Externals />
    </div>
  );
};
