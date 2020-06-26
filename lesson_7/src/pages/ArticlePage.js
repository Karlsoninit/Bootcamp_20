import React, { Component } from "react";
import { receivingNews } from "../services";
import queryString from "query-string";
import { Route, Link } from "react-router-dom";
import MoreInfo from "../components/MoreInfo";

class ArticlePage extends Component {
  state = {
    article: null,
  };

  componentDidMount() {
    const { qwery } = queryString.parse(this.props.location.search);

    if (qwery) {
      this.getCurrentArticle(qwery);
    }
  }

  getCurrentArticle = async (qwery) => {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    console.log("id", id.length);
    if (!id.length < 20) {
      const articles = await receivingNews(qwery);
      const article = articles.find((article) => article.publishedAt === id);
      this.setState({ article });
    }
  };

  goToComments = () => {
    this.props.history.push("/comments");
  };

  render() {
    const { article } = this.state;
    console.log("this.props", this.props);

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
        <Link to={{ pathname: `/more/${this.props.match.params.id}` }}>
          more info about ...
        </Link>
        <Route path={`/more/:id`} component={MoreInfo} />
      </div>
    ) : (
      <h2>page not found</h2>
    );
  }
}

export default ArticlePage;
