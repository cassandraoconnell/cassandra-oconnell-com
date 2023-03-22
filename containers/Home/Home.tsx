import { History } from "@/types/History";
import { Text } from "@/components/Text/Text";
import { Line } from "@/components/Line/Line";
import { Link } from "@/components/Link/Link";
import { Particles } from "@/components/Particles/Particles";
import { Timeline } from "@/components/Timeline/Timeline";
import { useParallax } from "react-scroll-parallax";
import { useOrientation } from "@/components/Orientation/Orientation";
import { home } from "./Home.css";

interface HomeProps {
  history?: History;
}

export const Home = ({ history }: HomeProps) => {
  const orientation = useOrientation();
  console.log(orientation);

  const topLeftSlide = useParallax<HTMLSpanElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: ["0%", "50%"],
    translateY: [0, 0],
  });

  const topRightSlide = useParallax<HTMLSpanElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: ["0%", "-50%"],
    translateY: [0, 0],
  });

  const bottomLeftSlide = useParallax<HTMLSpanElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: ["0%", "50%"],
    translateY: [0, 0],
  });

  const bottomRightSlide = useParallax<HTMLSpanElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: ["0%", "-50%"],
    translateY: [0, 0],
  });

  return (
    <>
      <div className={home.introduction.container}>
        <div className={home.introduction.name}>
          <Text as="h2" color="primary" size="small" weight="bold">
            Cassandra O&apos;Connell
          </Text>
        </div>
        <span ref={topLeftSlide.ref}>
          <Text as="h1" color="primary" size="large" weight="normal">
            I&apos;m a software engineer
          </Text>
        </span>
        <span ref={topRightSlide.ref}>
          <Text as="h1" color="primary" size="large" weight="normal">
            focused on building
          </Text>
        </span>
        <span ref={bottomLeftSlide.ref}>
          <Text as="h1" color="primary" size="large" weight="bold">
            reliable and engaging
          </Text>
        </span>
        <span ref={bottomRightSlide.ref}>
          <Text as="h1" color="primary" size="large" weight="bold">
            web applications.
          </Text>
        </span>
      </div>
      <div className={home.overview.container}>
        <div className={home.overview.left}>
          <Text as="p" color="primary" size="medium" weight="normal">
            I love taking on new technical challenges and thrive on solving
            unique software problems. I architect applications to be built on a
            solid foundation, ensuring they run smoothly at scale while allowing
            for quick iteration. My expertise lies in front-end software
            architecture and performance optimization, but I have experience
            writing code across the stack.
          </Text>
        </div>
        <div className={home.overview.right}>
          {history ? <Timeline history={history} /> : null}
        </div>
      </div>
      <div className={home.contact.container}>
        <div className={home.contact.gridline}>
          <Line direction="horizontal" />
        </div>
        <Text as="h2" color="primary" size="large" weight="bold">
          Let&apos;s connect.
        </Text>
        <div className={home.contact.details.container}>
          <div className={home.contact.details.item.container}>
            <Text as="h3" color="primary" size="medium" weight="bold">
              Email
            </Text>
            <Text as="p" color="primary" size="medium" weight="normal">
              oconnecl@pm.me
            </Text>
          </div>
          <div className={home.contact.details.item.container}>
            <Text as="h3" color="primary" size="medium" weight="bold">
              Around the web
            </Text>
            <div className={home.contact.details.item.list}>
              <Text as="p" color="primary" size="medium" weight="normal">
                <Link
                  href="https://github.com/cassandraoconnell"
                  target="_blank"
                >
                  Github
                </Link>
              </Text>
              <Text as="p" color="primary" size="medium" weight="normal">
                <Link
                  href="https://www.linkedin.com/in/cassandra-o-connell-7725561aa"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </Text>
              <Text as="p" color="primary" size="medium" weight="normal">
                <Link href="https://twitter.com/codessandra" target="_blank">
                  Twitter
                </Link>
              </Text>
            </div>
          </div>
          <div className={home.contact.details.item.container}>
            <Text as="h3" color="primary" size="medium" weight="bold">
              Resume
            </Text>
            <Text as="p" color="primary" size="medium" weight="normal">
              cassandra-oconnell.pdf
            </Text>
          </div>
        </div>
        <div className={home.contact.footer}>
          <Line direction="horizontal" />
          <Text as="p" color="primary" size="small" weight="normal">
            This site was designed and developed by Cassandra O’Connell. It was
            built in Next.js and Typescript—you can see the code{" "}
            <Link
              href="https://github.com/cassandraoconnell/cassandra-oconnell-com"
              target="_blank"
            >
              here
            </Link>
            .
          </Text>
        </div>
      </div>
    </>
  );
};
