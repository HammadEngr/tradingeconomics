import { useEffect, useState } from "react";
import { fetchData } from "../helpers/apiRequests";

const useIndicator = () => {
  const [country, setCountry] = useState("Sweeden");
  const [countryList, setCountryList] = useState([]);
  const [indicatorByCountry, setIndicatorByCountry] = useState([]);

  useEffect(() => {
    fetchData("countries").then((res) => {
      setCountryList(res || []);
    });
  }, []);

  useEffect(() => {
    fetchData("indicator", null, country).then((res) => {
      setIndicatorByCountry(res || []);
    });
  }, [country]);

  return { indicatorByCountry, setCountry, countryList };
};

export default useIndicator;
