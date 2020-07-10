import React from "react";

import axios from "axios";

const changeSearchParams = (param) => (param ? param : "babli");

const fetcher = (BaseComponent) => {
  return class Fetcher extends React.Component {
    state = {
      articles: null,
    };

    componentDidMount() {
      this.fetchNews();
    }

    fetchNews = async () => {
      const content = changeSearchParams();
      try {
        const {
          data: { articles },
        } = await axios.get(
          `http://newsapi.org/v2/everything?q=${"apple"}&sortBy=publishedAt&apiKey=170f254648c146d1b4131a2ec576187a`
        );

        this.setState({ articles });
      } catch (error) {
        console.log(error);
      }
    };

    render() {
      return <BaseComponent {...this.props} {...this.state} />;
    }
  };
};

export default fetcher;
