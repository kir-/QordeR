import React from "react";
import Restaurant from "components/Restaurant/index.js";
import Order from "components/Order";
import Admin from "components/Admin";
import Application from "components/Application";
import { useCookies } from 'react-cookie';

const [cookies] = useCookies(['user'])

console.log(cookies);

const routes = {
  "/": () => <Application />,
  "/restaurant/:id": ({ id }) => <Restaurant id={id}/>,
  "/:restoId/order/:id": ({ restoId, id }) => <Order restoId={restoId} id={id}/>,
  "/admin": () => <Admin />
};

export default routes;
