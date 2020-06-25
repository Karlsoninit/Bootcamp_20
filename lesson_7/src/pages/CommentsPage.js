import React from "react";

const CommentsPage = (props) => {
  const goToArticle = () => {
    console.log(props);
    props.history.goBack();
  };
  const goToHome = () => {
    console.log(props);
    props.history.push("/");
  };

  return (
    <>
      <h2>CommentsPage</h2>
      <button onClick={goToArticle}>go back</button>
      <button onClick={goToHome}>home page</button>
    </>
  );
};

export default CommentsPage;
