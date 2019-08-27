import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import routes from "./router";

function App() {
  const routeResult = useRoutes(routes);
  return routeResult;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
