import { useEffect, useState } from "react";
import { Link } from "@/components/Link/Link";
import { Text } from "@/components/Text/Text";
import { GithubIcon } from "@/icons/Github";
import { colors } from "@/style/tokens";
import { headerVariants, links } from "./Header.css";
import { LinkedInIcon } from "@/icons/LinkedIn";
import { TwitterIcon } from "@/icons/Twitter";

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
      <div className={links}>
        <Link href="https://github.com/cassandraoconnell" target="_blank">
          <GithubIcon
            color={isStuck ? colors.dark : colors.light}
            height={20}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/cassandra-o-connell-7725561aa"
          target="_blank"
        >
          <LinkedInIcon
            color={isStuck ? colors.dark : colors.light}
            height={20}
          />
        </Link>
        <Link href="https://twitter.com/codessandra" target="_blank">
          <TwitterIcon
            color={isStuck ? colors.dark : colors.light}
            height={20}
          />
        </Link>
      </div>
    </header>
  );
};
