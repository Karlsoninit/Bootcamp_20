import axios from "axios";

export const receivingNews = async () => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      "http://newsapi.org/v2/everything?q=apple&from=2020-05-25&sortBy=publishedAt&apiKey=170f254648c146d1b4131a2ec576187a"
    );

    return articles;
  } catch (error) {
    console.log(error);
  }
};
