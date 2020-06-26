import React, { Component } from "react";
import { receivingNews } from "../services";
import ArticlesList from "../components/articlesList";
import Search from "../components/search/Search";

class HomePage extends Component {
  state = {
    news: [],
    qwery: "",
  };

  componentDidMount() {
    // console.log("this.props HomePage", this.props);
    // console.log("window.location", window.location);
    // console.log("componentDidMount");
    this.fetcher();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevState", prevState.qwery);
    // console.log("this.state", this.state.qwery);
    if (prevState.qwery !== this.state.qwery) {
      this.fetcher(this.state.qwery);
    }
  }

  fetcher = async (qwery) => {
    const news = await receivingNews(qwery);
    this.setState({ news });
  };

  getSearchValue = (evt) => {
    evt.preventDefault();
    const qwery = evt.target.elements[0].value;
    this.setState({ qwery });
  };

  render() {
    const { news, qwery } = this.state;
    return (
      <>
        <Search onGetSearchValue={this.getSearchValue} />
        <ArticlesList data={news} qwery={qwery} />
      </>
    );
  }
}

export default HomePage;
