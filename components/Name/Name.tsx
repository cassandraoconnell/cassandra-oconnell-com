import { Text } from "@/components/Text/Text";
import { name } from "./Name.css";

export const Name = () => {
  return (
    <div className={name}>
      <Text as="h2" color="light" size="small" weight="bold">
        Cassandra O&apos;Connell
      </Text>
    </div>
  );
};
