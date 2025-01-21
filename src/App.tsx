import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Skills from "./containers/skills/Skills";
import Portfolio from "./containers/projects/Projects";
import Contact from "./containers/contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";





const App: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };
    initParticles();
  }, []);

  const particlesLoaded = async (container?: any): Promise<void> => {
    console.log(container);
  };

  const location = useLocation();
  console.log(location);

  return (
    <div className="h-full">
      {init && <Particles id="tsparticles" options={{
        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 25,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            random: false,
            speed: 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,

            },
            value: 180,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
        },
        detectRetina: true,
      }} particlesLoaded={particlesLoaded} />}
      <NavBar />
      <div className="h-customHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;