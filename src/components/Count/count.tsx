import React from "react";
import styles from "./count.module.css";
import CountUp from "react-countup";
import { CountUpInstanceProps } from "react-countup/build/types";

interface CountUpProps {
  operator?: string;
  afterText: string;
  countUp: CountUpInstanceProps;
}

function Count({ operator = "+", afterText, countUp }: CountUpProps) {
  return (
    <div className={styles.container}>
      <span className={styles.operator}>{operator}</span>
      <CountUp
        className={styles.counter}
        decimals={1}
        duration={5}
        enableScrollSpy
        scrollSpyOnce
        delay={0.1}
        {...countUp}
      />
      <span className={styles.afterText}>{afterText}</span>
    </div>
  );
}

export default Count;
