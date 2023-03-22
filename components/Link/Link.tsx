import NextLink from "next/link";
import { link } from "./Link.css";

export const Link = ({
  children,
  className = " ",
  ...props
}: React.ComponentProps<typeof NextLink>) => {
  return (
    <NextLink className={[link, className].join(" ").trim()} {...props}>
      {children}
    </NextLink>
  );
};
