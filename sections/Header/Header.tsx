import { useEffect, useState } from "react";
import { Text } from "@/components/Text/Text";
import { headerVariants } from "./Header.css";

export const Header = () => {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsStuck(window.scrollY > 5);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={isStuck ? headerVariants.stuck : headerVariants.loose}>
      <Text
        as="h2"
        color={isStuck ? "dark" : "light"}
        family="sans"
        size="medium"
        weight="bold"
      >
        {"Cassandra O'Connell"}
      </Text>
    </header>
  );
};
