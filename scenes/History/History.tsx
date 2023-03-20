import { Text } from "@/components/Text/Text";
import { history } from "./History.css";

export const History = () => {
  return (
    <div className={history}>
      <Text as="h1" color="light" size="large" weight="bold">
        History
      </Text>
    </div>
  );
};
