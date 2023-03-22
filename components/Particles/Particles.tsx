import { useCallback, useState } from "react";
import ReactParticles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { colors } from "@/style/tokens";

export const Particles = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const onLoaded = useCallback(async () => {
    setIsLoading(false);
  }, []);

  return (
    <ReactParticles
      /* className={
        isLoading ? particlesVariants.loading : particlesVariants.loaded
      } */
      init={onInit}
      loaded={onLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: colors.gray.dark,
          },
          links: {
            color: colors.gray.dark,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 1.0,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
