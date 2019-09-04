import React, { useState, useEffect, Fragment } from 'react';
import TopBar from "components/TopBar"
import { Button } from "@material-ui/core";
import MenuEdit from 'components/Restaurant/MenuEdit';
import Table from 'components/Restaurant/Table';

const axios = require('axios');

const TABLES = "TABLES";
const EDIT = "EDIT";

/*props
  id: restaurant's id
*/

export default function Restaurant(props) {
  const [state, setState] = useState(TABLES)

  useEffect(() => {

  })

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