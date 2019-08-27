import React from "react";
import Restaurant from "./components/Restaurant";
import Order from "./components/Order";
import Application from "./components/Application";
const routes = {
  "/": () => <Application />,
  "/restaurant": () => <Restaurant />,
  "/order": () => <Order />
};

export default routes;