import React, { useState } from "react";
import Count from "@/components/Count/count";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import Cloud from "@/components/models/cloud";
import { getDevelopingYears } from "@/utils/experience";
import styles from "./bio.module.css";
import { Scroll } from "@react-three/drei";

const Section = (props: any) => {
  return (
    <section
      className={styles.section}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className={styles["section-content"]}>
        <div>
          <div>{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html className={styles.allPanels}>
      <div>
        <Section opacity={opacityFirstSection}>
          <h1>Hello, Im Wawa Sensei</h1>
          <p>Welcome to my beautiful portfolio</p>
          <p>I know:</p>
          <ul>
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p>↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1>Here are my skillsets 🔥</h1>
          <p>PS: I never test</p>
          <p>
            <b>Frontend 🚀</b>
          </p>
          <ul>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p>
            <b>Backend 🔬</b>
          </p>
          <ul>
            <li>NodeJS</li>
            <li>tRPC</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p>↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1>🤙 Call me maybe?</h1>
          <p>Im very expensive but you wont regret it</p>
        </Section>
      </div>
    </Scroll>
  );
};

function Bio() {
  return (
    <section className={styles.about}>
      {/* <div className={styles.content}>
        <h2 className={styles.title}>Who Am I?</h2>
        <div className={styles.experience}>
          <Count
            countUp={{ end: getDevelopingYears(new Date(2021, 6, 1)) }}
            afterText="years of experience as"
          />
          <span>Frontend Developer</span>
        </div>
        <p className={styles["about-me"]}>
          I graduated from Universidad Politécnica de Madrid with a B.S and M.S
          in Telecommunications Engineer both, specialized in Computer Science.
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
      </div> */}

      <Canvas>
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <ScrollControls damping={0.5} pages={3}>
          <Cloud
            className={styles.cloud}
            position={[6, 2, -3]}
            rotation={[0, 0.2, 0.1]}
          />
          <Cloud
            stopped={false}
            className={styles.cloud}
            position={[6, 6, -10]}
            initialDirection={-0.5}
          />
          <Cloud
            stopped={false}
            className={styles.cloud}
            position={[-6, 7, -7]}
          />
          <Cloud
            className={styles.cloud}
            position={[-6, 2, -1]}
            rotation={[0, 0.2, 0.1]}
          />
          <Overlay />
        </ScrollControls>
      </Canvas>
    </section>
  );
}

export default Bio;
