import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import routes from "./router";
import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

function App() {
   return useRoutes(routes);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
