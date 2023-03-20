import Link from "next/link";
import { GithubIcon } from "@/icons/Github";
import { LinkedInIcon } from "@/icons/LinkedIn";
import { TwitterIcon } from "@/icons/Twitter";
import { colors } from "@/style/tokens";
import { externals } from "./Externals.css";

export const Externals = () => {
  return (
    <div className={externals}>
      <Link href="https://github.com/cassandraoconnell" target="_blank">
        <GithubIcon color={colors.white} height={20} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/cassandra-o-connell-7725561aa"
        target="_blank"
      >
        <LinkedInIcon color={colors.white} height={20} />
      </Link>
      <Link href="https://twitter.com/codessandra" target="_blank">
        <TwitterIcon color={colors.white} height={20} />
      </Link>
    </div>
  );
};
