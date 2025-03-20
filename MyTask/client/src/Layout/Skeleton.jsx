import React from "react";
import styles from "../styles/Skeleton.module.css";

function Skeleton({ className }) {
  const customClass = `${className} ${styles.skeleton_box}`;
  return <div className={customClass}></div>;
}

export default Skeleton;
