import { header } from "./Header.css";
import { Text } from "@/components/Text/Text";

export const Header = () => {
  return (
    <header className={header}>
      <Text as="h2" color="light" family="sans" size="medium" weight="bold">
        {"Cassandra O'Connell"}
      </Text>
    </header>
  );
};
