import { text } from "@/style/primitives/text.css";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { introduction } from "./Introduction.css";

const IntroductionContent = () => {
  const topLeftSlide = useParallax<HTMLHeadingElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: ["0%", "50%"],
    translateY: [0, 0],
  });

  const topRightSlide = useParallax<HTMLHeadingElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: ["0%", "-50%"],
    translateY: [0, 0],
  });

  const bottomLeftSlide = useParallax<HTMLHeadingElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: ["0%", "50%"],
    translateY: [0, 0],
  });

  const bottomRightSlide = useParallax<HTMLHeadingElement>({
    shouldAlwaysCompleteAnimation: true,
    translateX: ["0%", "-50%"],
    translateY: [0, 0],
  });

  return (
    <div className={introduction.container}>
      <div className={introduction.name}>
        <h2 className={text.quinary}>Cassandra O&apos;Connell</h2>
      </div>
      <h1 className={text.secondary} ref={topLeftSlide.ref}>
        I&apos;m a software engineer
      </h1>
      <h1 className={text.secondary} ref={topRightSlide.ref}>
        focused on building
      </h1>
      <h1 className={text.primary} ref={bottomLeftSlide.ref}>
        reliable and engaging
      </h1>
      <h1 className={text.primary} ref={bottomRightSlide.ref}>
        web applications.
      </h1>
    </div>
  );
};

export const Introduction = () => {
  return (
    <ParallaxProvider>
      <IntroductionContent />
    </ParallaxProvider>
  );
};
