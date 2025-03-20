import axios from "axios";

const BASE_URL = "http://localhost:5000/tradinghour";

export const fetchData = async (route, pair, country) => {
  try {
    const params = {
      pair: pair,
      country: country,
    };
    const path = pair ? `${BASE_URL}/${route}/${pair}` : `${BASE_URL}/${route}`;
    const { data } = await axios.get(path, { params });

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
