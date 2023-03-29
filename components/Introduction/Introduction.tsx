import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useView } from "@/components/View/View";
import { text } from "@/style/primitives/text.css";
import { headlineHeight, introduction } from "./Introduction.css";
import { Particles } from "./Particles/Particles";

const IntroductionContent = () => {
  const view = useView();

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
    <>
      <div
        className={introduction.headline.container}
        style={assignInlineVars({
          [headlineHeight]: `${view.height}px`,
        })}
      >
        <Particles />
        <div className={introduction.headline.gradient} />
        <div className={introduction.headline.name}>
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
      <div className={introduction.lede.container}>
        <div className={introduction.lede.text}>
          <p className={text.quaternary}>
            I love taking on new technical challenges and thrive on solving
            unique software problems. I architect applications to be built on a
            solid foundation, ensuring they run smoothly at scale while allowing
            for quick iteration. My expertise lies in front-end software
            architecture and performance optimization, but I have experience
            writing code across the stack.
          </p>
          <p className={text.tertiary}>Here&apos;s a look at my experience:</p>
        </div>
      </div>
    </>
  );
};

export const Introduction = () => {
  return (
    <ParallaxProvider>
      <IntroductionContent />
    </ParallaxProvider>
  );
};
