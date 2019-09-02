import React, { useState, Fragment } from 'react';
import TopBar from '../TopBar'
import { navigate } from "hookrouter";
import { Button } from "@material-ui/core";
import Table from './Table';
import MenuEdit from './MenuEdit';

const axios = require('axios');

const TABLES = "TABLES";
const EDIT = "EDIT";

export default function(props) {
  const [order, setOrder] = useState("");
  const [state, setState] = useState(TABLES)

  const sendOrder = () => {
    axios.post('/api/getMenu', {
      order
    }).then(
      navigate('/order')
    )
  }

  return (
    <Fragment>
      <TopBar title="All Orders" admin/>
      <br/>
      <br/>
      <br/>
      <div class="text-center">
        <Button onClick={() => setState(TABLES)}>Tables</Button> | <Button onClick={() => setState(EDIT)}>Edit Menu</Button>
      </div>
      <div>
        {state === TABLES && <Table/>}
        {state === EDIT && <MenuEdit/>}
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