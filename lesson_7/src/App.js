import React from "react";
import { useRouter } from "./router";

// import CreatePage from "./pages/CreatePage";
// import TodoPage from "./pages/TodoPage";

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

function App() {
  const routing = useRouter("170f254648c146d1b4131a2ec576187a");
  return <>{routing}</>;
}

export default App;
