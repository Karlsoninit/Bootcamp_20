import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import products from "./products.json";

function App() {
  return <Dashboard products={products} />;
}

export default App;
