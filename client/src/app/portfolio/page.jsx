import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  return (

    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/History" className={styles.item}>
          <span className={styles.title}>Histrory</span>
        </Link>
        <Link href="/portfolio/War" className={styles.item}>
          <span className={styles.title}>War</span>
        </Link>
        <Link href="/portfolio/victime" className={styles.item}>
          <span className={styles.title}>victime</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;