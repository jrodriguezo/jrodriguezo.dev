import React from "react";
import Link from "next/link";
import styles from "@/components/Navbar/Navbar.module.css";

function Navbar() {
  return (
    <ul className={styles.container}>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>About</Link>
      </li>
      <li>
        <Link href={"/"}>Projects</Link>
      </li>
      <li>
        <Link href={"/"}>Blog</Link>
      </li>
    </ul>
  );
}

export default Navbar;
