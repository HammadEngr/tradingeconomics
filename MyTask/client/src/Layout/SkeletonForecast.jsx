import React from "react";
import styles from "../styles/SkeletonForecast.module.css";

function SkeletonForecast() {
  return (
    <div className={styles.wrap}>
      <div className={styles.head_one}>
        <div className={styles.head_one_f}></div>
        <div className={styles.head_one_s}></div>
      </div>
      <div className={styles.head_two}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default SkeletonForecast;
