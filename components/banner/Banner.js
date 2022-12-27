import React, { Suspense } from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Canvas } from "@react-three/fiber";
import CameraControls from "../CameraControls";
import Sphere from "../Sphere";

const Banner = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    
    <div className="static-slider-head banner2 spacer">
      
      
      <Container>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "attract",
              parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
              attract: { distance: 200, duration: 0.4, factor: 5 }
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "##afc9ff", "#c7d8ff",  "#fff4f3", "#ffe5cf", "#ffd9b2", "#ffc78e", "#ffa651"],
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
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            outModes: "out",
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
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          twinkle: {
            particles: {
              enable: true,
              color: "#ffffff",
              frequency: 0.01,
              opacity: 7,
            },
          },  
        },
        detectRetina: true,
      }}
    />
      
        <Row className="mt-5">
          <Col lg="6" className="align-self-center">
            <h1>
            WE BRING WEB3 CLOSER TO EARTH
            </h1>
            <a
              href="#contacts"
              className="btn btn-outline-light m-r-20 btn-md m-t-30 mt-5"
            >
              Contact us
            </a>
          </Col>
          
          <Col className="mt-5 pt-5">
          <div style={{ width: "100%", height: "50vh" }}>

          
          <Canvas>
            <CameraControls />
            <directionalLight intensity={1} />
            <ambientLight intensity={0.6} />
            <Suspense fallback={<></>}>
              <Sphere />
            </Suspense>
          </Canvas>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
