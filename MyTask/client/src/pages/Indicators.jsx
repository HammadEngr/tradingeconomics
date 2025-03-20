import React from "react";
import styles from "../styles/Indicators.module.css";
import useIndicator from "../hooks/useIndicator";
import Indicator from "../components/indicator/Indicator";
import Skeleton from "../Layout/Skeleton";

function Indicators() {
  const { countryList, setCountry } = useIndicator();

  return (
    <div className={styles.indi_box}>
      {countryList.length > 0 ? (
        <p className={styles.title}>Click the country to view indicators</p>
      ) : (
        <p className={styles.title}>Searching...</p>
      )}

      <div className={styles.ind_wrapper}>
        {countryList.length === 0
          ? Array.from({ length: 70 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : countryList.map((indi) => (
              <Indicator
                key={indi.Country}
                country={indi.Country}
                continent={indi.Continent}
                setCountry={setCountry}
              />
            ))}
      </div>
    </div>
  );
}

export default Indicators;
