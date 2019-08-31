import React from "react";
import Restaurant from "./components/Restaurant";
import Order from "./components/Order";
import Application from "./components/Application";
import Cart from "./components/Cart"
const routes = {
  "/": () => <Application />,
  "/restaurant": () => <Restaurant />,
  "/order": () => <Order />,
  "/cart": () => <Cart />
};

export default routes;