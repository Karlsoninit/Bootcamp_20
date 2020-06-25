import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import CreatePage from "./pages/CreatePage";
// import TodoPage from "./pages/TodoPage";
import ArticlePage from "./pages/ArticlePage";
import CommentsPage from "./pages/CommentsPage";

// const page = ["create", "todo", "somePage"];

// const generatePage = (pages) => (
//   <ul>
//     {pages.map((page) => (
//       <li key={page}>
//         <Link to={page}>{page.toUpperCase()}</Link>
//       </li>
//     ))}
//   </ul>
// );

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/comments" component={CommentsPage} />
        <Route path="/:id" component={ArticlePage} />
      </Switch>
    </>
  );
}

export default App;
