import React from "react";
import Restaurant from "components/restaurant/index";
import Order from "components/Order";
import Admin from "components/Admin";
import Application from "components/Application";

const routes = {
  "/": () => <Application />,
  "/:restoId/order/:id": ({ restoId, id }) => <Order restoId={restoId} id={id}/>,
  "/admin/:id": ({ id }) => <Restaurant id={id}/>,
  "/admin": () => <Admin />
};

export default routes;
