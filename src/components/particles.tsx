import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const FallingParticles = () => {
  // Inicializa o motor de partículas
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const options = useMemo(
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
            quantity: 3,
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
          value: 8,
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
                src: "/leafs/leaf_0.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_1.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_2.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_3.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_4.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_5.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_6.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_7.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_8.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_9.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_10.png",
                width: 5,
                height: 5,
              },
              {
                src: "/leafs/leaf_11.png",
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

  return (
    <div
      className="pointer-events-none fixed inset-0"
      style={{
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Particles
        id="falling-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default FallingParticles;
