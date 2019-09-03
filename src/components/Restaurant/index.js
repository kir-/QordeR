import React, { useState, useEffect, Fragment } from 'react';
import TopBar from '../TopBar'
import { Button } from "@material-ui/core";
import Table from './Table';
import MenuEdit from './MenuEdit';

const axios = require('axios');

const TABLES = "TABLES";
const EDIT = "EDIT";

export default function Restaurant(props) {
  const [order, setOrder] = useState("");
  const [state, setState] = useState(TABLES)

  /*props
    id: restaurant's id
  */

  return (
    <Fragment>
      <TopBar title="All Orders" admin/>
      <br/>
      <br/>
      <br/>
      <div class="text-center">
        <Button onClick={() => setState(TABLES)}>Tables</Button> | <Button onClick={() => setState(EDIT)}>Edit Menu</Button>
      </div>
      <div class="text-center">
        {state === TABLES && <Table restaurantId={props.id}/>}
        {state === EDIT && <MenuEdit restaurantId={props.id}/>}
      </div>
    </Fragment>
  )
}
// <form onSubmit={event => event.preventDefault()}>
//   Menu Item:
//   <br></br>
//   <input
//     type="text"
//     name="Menu"
//     onChange={event => setOrder(event.target.value)}
//   ></input>
//   <br/>
//   <button onClick={()=> sendOrder()}>Order Now!</button>
// </form>