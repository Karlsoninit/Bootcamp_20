import React from "react";
import { Link } from "react-router-dom";
import authConfig from "../authConfig";

const Navigation = ({ parentPath }) => {
  return (
    <ul style={{ display: "flex" }}>
      {authConfig.map((route) => (
        <li key={route.label}>
          <Link to={`${parentPath}${route.path}`}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
