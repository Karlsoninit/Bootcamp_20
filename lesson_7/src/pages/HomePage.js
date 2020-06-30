import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { receivingNews } from "../services";
import ArticlesList from "../components/articlesList";
import Search from "../components/search/Search";

class HomePage extends Component {
  state = {
    news: [],
    qwery: "",
  };

  componentDidMount() {
    const location = this.props.location.state;

    if (location) {
      this.setState({ qwery: location.qwery });
      this.fetcher(location.qwery);
    } else {
      this.fetcher();
    }
  }

  componentDidUpdate(prevProps, prevState) {
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

export default withRouter(HomePage);
