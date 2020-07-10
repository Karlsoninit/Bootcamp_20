import React, { Component } from "react";
import { receivingNews } from "../services";
import queryString from "query-string";
import { Route, Link, withRouter } from "react-router-dom";
import MoreInfo from "../components/MoreInfo";
import toggle from "../components/HOC/toggle";

class ArticlePage extends Component {
  state = {
    article: null,
    qwery: null,
  };

  componentDidMount() {
    if (this.props.match.params.id.length < 20) {
      console.log("redirect");
      this.props.history.push("/");
    }

    const { qwery } = queryString.parse(this.props.location.search);
    this.setState({ qwery });
    if (qwery) {
      this.getCurrentArticle(qwery);
    }
  }

  getCurrentArticle = async (qwery) => {
    const id = this.props.match.params.id;

    if (!id.length < 20) {
      const articles = await receivingNews(qwery);
      const article = articles.find((article) => article.publishedAt === id);
      this.setState({ article });
    }
  };

  goToComments = () => {
    this.props.history.push("/comments", {
      qwery: this.state.qwery,
    });
  };

  render() {
    const { article } = this.state;

    console.log("this.props Articleage", this.props);

    return article ? (
      <div>
        <h2>{article.author}</h2>
        <p>{article.description}</p>
        <img
          style={{ width: 400, height: 250 }}
          src={article.urlToImage}
          alt="news"
        />
        <button onClick={this.goToComments}>comment this article</button>

        {/* <Link to={{ pathname: `/more/${this.props.match.params.id}` }}>
          more info about ...
        </Link> */}
        <Route path={`/more/:id`} component={MoreInfo} />
      </div>
    ) : (
      <h2>page not found</h2>
    );
  }
}

export default withRouter(toggle({ subscription: true })(ArticlePage));
