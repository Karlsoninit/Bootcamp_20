import axios from "axios";

const changeSearchParams = (param) => (param ? param : "apple");

export const receivingNews = async (qwery) => {
  const content = changeSearchParams(qwery);
  try {
    const {
      data: { articles },
    } = await axios.get(
      `http://newsapi.org/v2/everything?q=${content}&sortBy=publishedAt&apiKey=170f254648c146d1b4131a2ec576187a`
    );

    return articles;
  } catch (error) {
    console.log(error);
  }
};
