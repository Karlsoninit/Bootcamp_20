import React, { Component } from "react";
import { receivingNews } from "../services";
import ArticlesList from "../components/articlesList";

class HomePage extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.fetcher();
  }

  fetcher = async () => {
    const news = await receivingNews();
    this.setState({ news });
  };

  render() {
    const { news } = this.state;
    console.log("this.props", this.props);
    return <ArticlesList data={news} />;
  }
}

export default HomePage;
