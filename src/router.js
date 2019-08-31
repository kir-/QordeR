import React from "react";
import Restaurant from "./components/Restaurant";
import Order from "./components/Order";
import Application from "./components/Application";
import Cart from "./components/Cart"
import Menu from "./components/Menu";


const routes = {
  "/": () => <Application />,
  "/restaurant": () => <Restaurant />,
  "/order": () => <Order />,
  "/menu": () => <Menu />
};

export default routes;