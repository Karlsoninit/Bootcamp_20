import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { pathCreate } from "../router";

const CommentsPage = () => {
  const history = useHistory();
  let qwery = "";
  const location = useLocation();
  if (location.state) {
    qwery = location.state.qwery;
  }

  const goToArticle = () => {
    history.goBack();
  };

  const goToHome = () => {
    const path = pathCreate("Home");
    history.push(path, { qwery });
  };

  return (
    <>
      <h2>Comments your fetch : {qwery ? qwery : "not found ("}</h2>
      <button onClick={goToArticle}>go back</button>
      <button onClick={goToHome}>home page</button>
    </>
  );
};

export default CommentsPage;
