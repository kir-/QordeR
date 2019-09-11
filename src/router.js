import React from "react";
import Restaurant from "components/Restaurant/index";
import Order from "components/Order";
import Admin from "components/Admin";
import Application from "components/Application";
import Orderstatus from "components/Menu/Orderstatus";
import Loader from "components/loading_test";

const routes = {
  "/": () => <Application />,
  "/:restoId/order/:id": ({ restoId, id }) => <Order restoId={restoId} id={id}/>,
  "/admin/:restoId": ({ restoId }) => <Restaurant restoId={restoId}/>,
  "/admin": () => <Admin />,
  "/order": () => <Orderstatus />,
  "/load": () => <Loader/>
};


export default routes;
