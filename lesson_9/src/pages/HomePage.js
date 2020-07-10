import React, { Component, lazy, Suspense } from "react";
import { withRouter } from "react-router-dom";
import { receivingNews } from "../services";
import ArticlesList from "../components/articlesList";
import Search from "../components/search/Search";
// import Loadable from "react-loadable";
import fetcher from "../components/HOC/fetcher";
const Loading = () => {
  return <h2>Loading ...</h2>;
};

// const LoadableFilter = Loadable({
//   loader: () =>
//     import("../components/filter/Filter" /* webpackChunkName: "Filter" */),
//   loading: Loading,
// });

const LoadableFilter = lazy(() =>
  import("../components/filter/Filter" /* webpackChunkName: "Filter" */)
);

class HomePage extends Component {
  state = {
    news: this.props.articles,
    qwery: "",
    isShow: false,
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

  showFilter = () => {
    this.setState((prev) => ({ isShow: !prev.isShow }));
  };

  render() {
    console.log("home page props :", this.props);
    const { news, qwery, isShow } = this.state;
    return (
      <Suspense fallback={<Loading />}>
        <Search onGetSearchValue={this.getSearchValue} />
        <button onClick={this.showFilter}>show filter</button>
        {isShow && <LoadableFilter />}
        {news && <ArticlesList data={news} qwery={qwery} />}
      </Suspense>
    );
  }
}

export default withRouter(fetcher(HomePage));
