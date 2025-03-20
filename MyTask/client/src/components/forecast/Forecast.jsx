import React from "react";
import styles from "../../styles/Forecast.module.css";
import { TrendingDown, TrendingUp, TrendingUpDown } from "lucide-react";
function Forecast({ forecast }) {
  const {
    Symbol,
    Name,
    Country,
    Date,
    Type,
    Unit,
    Forecast1,
    Forecast2,
    Forecast3,
    Forecast4,
  } = forecast;
  const trend =
    Forecast1 > Forecast2 && Forecast2 > Forecast3 && Forecast3 > Forecast4
      ? "Bearish"
      : Forecast1 < Forecast2 && Forecast2 < Forecast3 && Forecast3 < Forecast4
      ? "Bullish"
      : "Sideways";
  const trend_class =
    trend === "Bearish"
      ? styles.bearish
      : trend === "Bullish"
      ? styles.bullish
      : styles.sideways;
  return (
    <div className={styles.forecast_warapper}>
      <div className={styles.fc_name}>
        <p className={styles.fc_symbol}>{Symbol.split(":")[0]}</p>
        <div className={styles.fc_type_country}>
          <p>{Type}</p>
          <p>{Country}</p>
        </div>
      </div>
      <div className={styles.fc_details}>
        <p>{Date}</p>
        <p className={styles.fc_trend}>
          {trend === "Bearish" ? (
            <TrendingDown className={styles.bearish} />
          ) : trend === "Bullish" ? (
            <TrendingUp className={styles.bullish} />
          ) : (
            <TrendingUpDown />
          )}
          <span className={trend_class}>{trend}</span>
        </p>
        <div className={styles.fc_box}>
          <p>{Forecast1}</p>
          <p>{Forecast2}</p>
          <p>{Forecast3}</p>
          <p>{Forecast4}</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
