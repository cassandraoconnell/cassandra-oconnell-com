import { assignInlineVars } from "@vanilla-extract/dynamic";
import { opacityVar, scene } from "./Scene.css";

interface SceneProps {
  transitionPercentage: number;
}

export const Scene = ({
  children,
  transitionPercentage,
}: React.PropsWithChildren<SceneProps>) => {
  return (
    <section
      className={scene}
      style={assignInlineVars({
        [opacityVar]: `${1.0 - transitionPercentage}`,
      })}
    >
      {children}
    </section>
  );
};
