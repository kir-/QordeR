import React from "react";
import Restaurant from "./components/Restaurant";
import Order from "./components/Order";
import Admin from "./components/Admin";
import Application from "./components/Application";

const routes = {
  "/": () => <Application />,
  "/restaurant": () => <Restaurant />,
  "/order": () => <Order />,
  "/admin": () => <Admin />
};

export default routes;