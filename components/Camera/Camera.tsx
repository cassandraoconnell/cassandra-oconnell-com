import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Scene } from "@/components/Scene/Scene";
import { camera, heightVar, scroller } from "./Camera.css";
import { useEffect, useState } from "react";

interface CameraProps {
  scenes: JSX.Element[];
}

export const Camera = ({ scenes }: CameraProps) => {
  const [sceneHeight, setSceneHeight] = useState(0);
  const [transitionPercentages, setTransitionPercentages] = useState<
    number[] | null
  >(null);

  useEffect(() => {
    const onResize = () => {
      setSceneHeight(window.innerHeight);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const newTransitionPercentages: number[] = [];

      for (let sceneIndex = 0; sceneIndex < scenes.length; sceneIndex++) {
        const scrollY = window.scrollY;
        const sceneScrollTop = sceneIndex * sceneHeight;

        const value = Math.abs(sceneScrollTop - scrollY);
        const minimum = 0;
        const maximum = sceneHeight;
        const percentage =
          (Math.min(value, maximum) - minimum) / (maximum - minimum);

        newTransitionPercentages.push(percentage);
      }

      setTransitionPercentages(newTransitionPercentages);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sceneHeight, scenes.length]);

  return (
    <div className={camera}>
      <div
        className={scroller}
        style={assignInlineVars({
          [heightVar]: `${sceneHeight * scenes.length}px`,
        })}
      />
      {transitionPercentages
        ? scenes.map((scene, index) => (
            <Scene
              key={index}
              transitionPercentage={transitionPercentages[index]}
            >
              {scene}
            </Scene>
          ))
        : null}
    </div>
  );
};
