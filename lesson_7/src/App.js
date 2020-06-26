import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import CreatePage from "./pages/CreatePage";
// import TodoPage from "./pages/TodoPage";
import ArticlePage from "./pages/ArticlePage";
import CommentsPage from "./pages/CommentsPage";
// import TestHistory from "./components/TestHistory";
// import Application from "./components/Application";
// import Shop from "./components/Shop";

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

const url = "dksldfdfld/fd";

function App(props) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage url={url} {...props} />}
        />

        <Route path="/comments" component={CommentsPage} />
        <Route path="/:id" component={ArticlePage} />
      </Switch>
      {/* <TestHistory>
        <Application />
        <Shop />
      </TestHistory> */}
    </>
  );
}

export default App;
