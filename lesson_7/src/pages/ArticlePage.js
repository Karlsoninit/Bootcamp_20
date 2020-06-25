import React, { Component } from "react";
import { receivingNews } from "../services";

class ArticlePage extends Component {
  state = {
    article: null,
  };

  componentDidMount() {
    this.getCurrentArticle();
  }

  getCurrentArticle = async () => {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    const articles = await receivingNews();
    const article = articles.find((article) => article.publishedAt === id);
    this.setState({ article });
  };

  goToComments = () => {
    this.props.history.push("/comments");
  };

  render() {
    const { article } = this.state;
    return (
      article && (
        <div>
          <h2>{article.author}</h2>
          <p>{article.description}</p>
          <img
            style={{ width: 400, height: 250 }}
            src={article.urlToImage}
            alt="news"
          />
          <button onClick={this.goToComments}>comment this article</button>
        </div>
      )
    );
  }
}

export default ArticlePage;
