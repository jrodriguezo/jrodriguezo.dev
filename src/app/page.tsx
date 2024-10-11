"use client";
import Image from "next/image";
import styles from "./page.module.css";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import PoliceWiggum from "../../Police_wiggum";
import PoliceEddie from "../components/models/simpsons/police-eddie";
import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";

/*
const Scene = dynamic(() => import("@/components/ThreeJS/Scene"), {
  ssr: false,
});
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[2, 2, 6]} />
        {/* <OrbitControls makeDefault enableZoom={false} /> */}
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ScrollControls damping={0.5} pages={3}>
          <PoliceWiggum position={[-3, -2, 0]} />
          <PoliceEddie position={[0, -2, 0]} />
        </ScrollControls>
      </Canvas>
    </main>
  );
}
