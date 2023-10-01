"use client";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";

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
  const scrollPassedHalf = scrollY > windowHeight;

  return (
    <main className={styles.main}>
      <div
        className={styles.stats}
        style={{
          filter: `blur(${scrollY / 250}px)`,
          display: scrollPassedHalf ? "none" : "",
        }}
      >
        <h1>Frontend Developer</h1>
        <h3>Jesus Rodriguez Ovejero</h3>
        <div>
          <small>Design</small>
          <small>Develop</small>
          <small>Minimalist</small>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>Texto</div>
      </div>
    </main>
  );
}
