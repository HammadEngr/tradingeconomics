import React from "react";
import News from "./News";
import styles from "../../styles/NewsList.module.css";
import Skeleton from "../../Layout/Skeleton";

function NewsList({ title, newsData, type }) {
  const arrLength = type === "top" ? 3 : 50;
  return (
    <div className={styles.nl_box}>
      <p className={styles.nl_heading}>{title}</p>
      <div className={styles.nl_list}>
        {newsData.length === 0
          ? Array.from({ length: arrLength }).map((_, index) => (
              <Skeleton key={index} className={styles.skeleton} />
            ))
          : newsData.map((news, i) => <News news={news} key={`NL_${i}`} />)}
      </div>
    </div>
  );
}

export default NewsList;
