import React from "react";
import Forecast from "./Forecast";
import styles from "../../styles/ForecastList.module.css";
import useMarketWatchContext from "../../hooks/useMarketWatchContext";
import SkeletonForecast from "../../Layout/SkeletonForecast";

function ForecastList() {
  const { forecast } = useMarketWatchContext();

  return (
    <div className={styles.fl_wrapper}>
      <p className={styles.fl_title}>Our Forecasts</p>
      <div className={styles.fl_box}>
        {forecast.length === 0
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonForecast key={index} className={styles.skeleton} />
            ))
          : forecast.map((item, i) => (
              <Forecast forecast={item} key={`FL_${i}`} />
            ))}
      </div>
    </div>
  );
}

export default ForecastList;
