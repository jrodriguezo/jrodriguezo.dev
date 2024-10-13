"use client";
import Image from "next/image";
import styles from "./page.module.css";

import dynamic from "next/dynamic";
import { Canvas, useThree } from "@react-three/fiber";
import PoliceWiggum from "../../Police_wiggum";
import PoliceEddie from "../components/models/simpsons/police-eddie";
import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";
import { MathUtils } from "three";
import { useRef } from "react";
import { getDevelopingYears } from "@/utils/experience";
import Count from "@/components/Count/count";

/*
const Scene = dynamic(() => import("@/components/ThreeJS/Scene"), {
  ssr: false,
});
*/

const CameraControls = () => {
  const controlsRef = useRef();
  const { camera } = useThree();

  // This will run on every frame
  /*
  useFrame(() => {
    if (controlsRef.current) {
      console.log(`Camera Position: ${JSON.stringify(camera.position)}`);
      console.log(`Camera Rotation: ${JSON.stringify(camera.rotation)}`);
    }
  });
  */

  return <OrbitControls ref={controlsRef} makeDefault enableZoom={false} />;
};

const Overlay = ({ children }: any) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Overlay>
          <h1 className={styles.title}>Jesús Rodríguez Ovejero</h1>
          <h2>
            <Count
              countUp={{ end: getDevelopingYears(new Date(2021, 6, 1)) }}
              afterText="years of experience as"
            />
            <span>Frontend Developer</span>
          </h2>
          <p>
            I graduated from Universidad Politécnica de Madrid with a B.S and
            M.S in Telecommunications Engineer both, specialized in Computer
            Science.
          </p>
          <Count countUp={{ end: 6, decimals: 0 }} afterText="B2C projects" />
          <Count
            countUp={{ end: 1, decimals: 0 }}
            afterText="Freelance project"
          />
          <p>
            I collaborate with vocational training and university students,
            helping them unlock their potential in the software sector by
            providing tailored support and guidance.
          </p>
          <Count
            countUp={{ end: 8, decimals: 0 }}
            afterText="Satisfied students"
          />
        </Overlay>
        <Canvas>
          <PerspectiveCamera
            makeDefault
            fov={60}
            position={[3.84, 0.44, 3.6]}
            rotation={[-0.12, 0.81, 0.08]}
          />
          {/* <CameraControls /> */}
          <ambientLight />
          <directionalLight
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <ScrollControls damping={0.5} pages={3}>
            <PoliceEddie position={[0, -1.5, 0]} />
          </ScrollControls>
        </Canvas>
      </main>
      <footer></footer>
    </>
  );
}
