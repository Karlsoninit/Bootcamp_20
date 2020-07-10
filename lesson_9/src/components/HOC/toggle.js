import React from "react";
import queryString from "query-string";
import { receivingNews } from "../../services";

const toggle = ({ subscription }) => (BaseComponent) => {
  // console.log("subscription", subscription);
  return class Toggle extends React.Component {
    state = {
      article: "",
      info: false,
      qwery: "",
    };

    componentDidMount() {
      if (this.props.match.params.id.length < 20) {
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

    moreInfo = () => {
      this.setState({ info: true });
    };

    render() {
      console.log("Toggle props", this.props);
      console.log("Toggle state", this.state);
      console.log("subscription", subscription);
      return (
        <>
          {subscription && <h2>show more info about this article</h2>}
          <BaseComponent {...this.props} search={this.state.search} />
          {subscription && (
            <button onClick={this.moreInfo}>show more info</button>
          )}
          {this.state.info && <h2>{this.state.article.content}</h2>}
        </>
      );
    }
  };
};

export default toggle;
