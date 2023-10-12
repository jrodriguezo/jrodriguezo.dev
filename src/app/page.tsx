"use client";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event) => {
    const { scrollY } = window;
    setScrollY(scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const windowHeight = window.innerHeight;
  const scrollEntireHeight = scrollY > windowHeight - (12 * 4 + 19.5);
  const entireStyles = scrollEntireHeight ? styles.entire : "";

  return (
    <main className={styles.main}>
      <div
        className={styles.stats}
        style={{
          filter: `blur(${scrollY / 100}px)`,
          /* display: scrollPassedHalf ? "none" : "", */
        }}
      >
        <h1>Frontend Developer</h1>
        <h3>Jesus Rodriguez Ovejero</h3>
      </div>
      <Image
        className={styles.rocket}
        style={{
          bottom: (scrollY + 70) * (scrollY > 0 ? 1.2 : 1),
        }}
        src={"/assets/images/rocket.png"}
        alt="rocket"
        height={560}
        width={320}
      />
      <div
        className={styles.smoke}
        style={{
          visibility: scrollY === 0 ? "hidden" : "visible",
          bottom: scrollY * (scrollY > 0 ? 1.2 : 1),
        }}
      />
      <div className={styles.wrapper}>
        <div className={`${styles.navbar} ${entireStyles}`}>
          <Navbar />
        </div>
        <div className={styles.content}>Texto</div>
        <div className={styles.secondContent}>Texto2</div>
      </div>
    </main>
  );
}
