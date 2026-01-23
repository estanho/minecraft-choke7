"use client";

import { type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export function FallingParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
        rotate: {
          value: 0,
          animation: {
            enable: true,
            speed: 60,
            sync: false,
          },
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {},
        links: {
          enable: false,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: {
            min: 0.5,
            max: 2,
          },
          straight: false,
          wobble: {
            enable: true,
            distance: 15,
            speed: {
              min: -15,
              max: 15,
            },
          },
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 16,
        },
        opacity: {
          value: {
            min: 0.6,
            max: 0.9,
          },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "image",
          options: {
            image: [
              {
                src: "/images/particles/firefly.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_0.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_1.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_2.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_3.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_4.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_5.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_6.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_7.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_8.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_9.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_10.png",
                width: 5,
                height: 5,
              },
              {
                src: "/images/particles/leafs/leaf_11.png",
                width: 5,
                height: 5,
              },
            ],
          },
        },
        size: {
          value: {
            min: 5,
            max: 6,
          },
          animation: {
            enable: true,
            speed: 3,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="pointer-events-none fixed inset-0 z-50"
      />
    );
  }
}
