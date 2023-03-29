import classNames from "classnames";
import Link from "next/link";
import { link } from "@/style/primitives/link.css";
import { text } from "@/style/primitives/text.css";
import { contact } from "./Contact.css";

export const Contact = () => {
  return (
    <div className={contact.container}>
      <div className={contact.connect.container}>
        <h2 className={text.primary}>Let&apos;s connect.</h2>
        <div className={contact.connect.details.container}>
          <div className={contact.connect.details.item.container}>
            <h3 className={text.tertiary}>Email</h3>
            <p className={text.quaternary}>oconnecl@pm.me</p>
          </div>
          <div className={contact.connect.details.item.container}>
            <h3 className={text.tertiary}>Around the web</h3>
            <div className={contact.connect.details.item.list}>
              <Link
                className={classNames(link, text.quaternary)}
                href="https://github.com/cassandraoconnell"
                target="_blank"
              >
                Github
              </Link>

              <Link
                className={classNames(link, text.quaternary)}
                href="https://www.linkedin.com/in/cassandra-o-connell-7725561aa"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                className={classNames(link, text.quaternary)}
                href="https://twitter.com/codessandra"
                target="_blank"
              >
                Twitter
              </Link>
            </div>
          </div>
          <div className={contact.connect.details.item.container}>
            <h3 className={text.tertiary}>Resume</h3>
            <Link
              className={classNames(link, text.quaternary)}
              download="cassandra-oconnell"
              href="/cassandra-oconnell.pdf"
              target="_blank"
            >
              cassandra-oconnell.pdf
            </Link>
          </div>
        </div>
      </div>
      <div className={contact.footer}>
        <p className={text.senary}>
          This site was designed and developed by Cassandra O’Connell. It was
          built in Next.js and Typescript—you can see the code{" "}
          <Link
            className={classNames(link, text.senary)}
            href="https://github.com/cassandraoconnell/cassandra-oconnell-com"
            target="_blank"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
