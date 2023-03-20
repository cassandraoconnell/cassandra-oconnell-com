import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Externals } from "@/components/Externals/Externals";
import { Name } from "@/components/Name/Name";
import { Text } from "@/components/Text/Text";
import { colors } from "@/style/tokens";
import { introduction } from "./Introduction.css";

export const Introduction = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <div className={introduction}>
        <Name />
        <Text as="h1" color="light" size="large" weight="normal">
          I’m a software engineer focused on{" "}
          <Text as="span" color="light" size="large" weight="bold">
            well-architected and performance-optimized web apps{" "}
          </Text>
          that are just as reliable as they are engaging.
        </Text>
        <Externals />
      </div>
      <Particles
        init={particlesInit}
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
    </>
  );
};
