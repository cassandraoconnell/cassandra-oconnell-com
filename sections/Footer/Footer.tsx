import { Text } from "@/components/Text/Text";
import { footer } from "./Footer.css";

export const Footer = () => {
  return (
    <footer className={footer}>
      <Text as="p" color="dark" family="sans" size="small" weight="normal">
        This site was built using NextJS and Typescript. You can see the code
        here, if you’re interested.
      </Text>
      <Text as="p" color="dark" family="sans" size="small" weight="normal">
        Copyright 2023 Cassandra O’Connell. All rights reserved.
      </Text>
    </footer>
  );
};
