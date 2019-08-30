import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import 'bootstrap/dist/css/bootstrap.css';
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import routes from "./router";

function App() {
   return useRoutes(routes);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
