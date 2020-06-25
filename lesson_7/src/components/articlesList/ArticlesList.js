import React from "react";
import ArticleListItem from "../articlelistItem/ArticleListItem";

const ArticlesList = ({ data }) => {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map(
        (article) =>
          article.urlToImage && (
            <ArticleListItem key={article.url} {...article} />
          )
      )}
    </ul>
  );
};
export default ArticlesList;
