"use client";
import Image from "next/image";
import styles from "./page.module.css";

import dynamic from "next/dynamic";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import PoliceEddie from "../components/models/simpsons/police-eddie";
import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  useScroll,
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
  useFrame(() => {
    if (controlsRef.current) {
      console.log(`Camera Position: ${JSON.stringify(camera.position)}`);
      console.log(`Camera Rotation: ${JSON.stringify(camera.rotation)}`);
    }
  });

  return <OrbitControls ref={controlsRef} makeDefault enableZoom={true} />;
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
        <div className={styles.marquee}>
          <div className={styles["ticker-wrap"]}>
            <div className={styles["ticker"]}>
              <span className={styles["item-collection-1"]}>
                <span className={styles["item"]}>POLICE LINE DO NOT CROSS</span>
                <span className={styles["item"]}>POLICE LINE DO NOT CROSS</span>
                <span className={styles["item"]}>POLICE LINE DO NOT CROSS</span>
                <span className={styles["item"]}>POLICE LINE DO NOT CROSS</span>
              </span>
              <span className={styles["item-collection-2"]}>
                <span className={styles["item"]}>POLICE LINE DO NOT CROSS</span>
                <span className={styles["item"]}>POLICE LINE DO NOT CROSS</span>
                <span className={styles["item"]}>POLICE LINE DO NOT CROSS</span>
                <span className={styles["item"]}>POLICE LINE DO NOT CROSS</span>
              </span>
            </div>
          </div>
        </div>
        <Overlay>
          <div className={styles["poster"]}>
            <h1>WANTED</h1>
            <p className={styles["subheading"]}>
              DEAD <span>OR</span> ALIVE
            </p>
            <div
              className={styles["mugshot"]}
              role="img"
              aria-label="mugshot-img"
            ></div>
            <h2>REWARD</h2>
            <p>Frontend Developer</p>
          </div>
          {/* 
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
          */}
        </Overlay>
        <Canvas>
          <PerspectiveCamera
            makeDefault
            fov={60}
            position={[13.72, 1.0, 2.57]}
            rotation={[-0.37, 1.37, 0.36]}
          />
          <ambientLight />
          <directionalLight
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <ScrollControls damping={0.5} pages={3}>
            <PoliceEddie position={[10, -2, 0]} />
          </ScrollControls>
        </Canvas>
      </main>
      {/* <footer className={styles.footer}>
        <a
          className={styles.link}
          href="mailto:jrodriguezo.developer@gmail.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
          </svg>
          <span>Email</span>
        </a>
        <a
          className={styles.link}
          href="https://es.linkedin.com/in/jes%C3%BAs-rodr%C3%ADguez-ovejero-b704131b4?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle cx="4.983" cy="5.009" r="2.188"></circle>
            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
          </svg>
          <span>Linkedin</span>
        </a>
        <a
          className={styles.link}
          href="https://github.com/jrodriguezo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
          </svg>
          <span>GitHub</span>
        </a>
      </footer> */}
    </>
  );
}
