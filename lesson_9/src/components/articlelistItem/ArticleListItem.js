import React from "react";
import { Link, withRouter } from "react-router-dom";

const ArticlelistItem = ({
  urlToImage,
  publishedAt,
  history,
  title,
  qwery,
}) => {
  return (
    <li
      style={{
        margin: 10,
        flexDirection: "column",
        display: "flex",
        width: 400,
      }}
    >
      <img style={{ width: 400, height: 250 }} src={urlToImage} alt="news" />
      {/* <button
        onClick={() =>
          history.push({
            pathname: `/${publishedAt}`,
            search: "?category=adventure",
            hash: "#treasure-island",
            state: { from: "/dashboard" },
          })
        }
      >
        show more info
      </button> */}
      <Link
        to={{
          pathname: `/${publishedAt}`,
          search: `?qwery=${qwery}`,
          // hash: "#treasure-island",
          // state: { from: "/dashboard" },
        }}
      >
        show more info about {title}
      </Link>
    </li>
  );
};

export default withRouter(ArticlelistItem);
