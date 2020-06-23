import axios from "axios";

export const fetchProducts = async (path) => {
  try {
    const { data } = await axios.get(
      `https://news-9cced.firebaseio.com/${path}.json`
    );
    console.log("data", data);
    const transformData = Object.keys(data).map((key) => {
      return {
        ...data[key],
        id: key,
      };
    });
    return transformData;
  } catch (error) {
    console.log(error);
  }
};
