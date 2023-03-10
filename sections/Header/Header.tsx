import { useEffect, useState } from "react";
import { Link } from "@/components/Link/Link";
import { Text } from "@/components/Text/Text";
import { GithubIcon } from "@/icons/Github";
import { LinkedInIcon } from "@/icons/LinkedIn";
import { TwitterIcon } from "@/icons/Twitter";
import { colors } from "@/style/tokens";
import { headerVariants, links, sentry } from "./Header.css";

export const Header = () => {
  const [isStuck, setIsStuck] = useState(false);
  const [sentryElement, setSentryElement] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    if (sentryElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            setIsStuck(entry.isIntersecting);
          }
        },
        { threshold: [1] }
      );

      observer.observe(sentryElement);

      return () => {
        observer.disconnect();
      };
    }
  }, [sentryElement]);

  return (
    <>
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
      <div className={sentry} ref={setSentryElement} />
    </>
  );
};
