import React, { useState, Fragment } from 'react';
import TopNav from './TopNav'
const axios = require('axios');
import { navigate } from "hookrouter";
// import routes from "../router";

export default function(props) {
  const [order, setOrder] = useState("");

  const sendOrder = () => {
    axios.post('/api/getMenu', {
      order
    }).then(
      navigate('/order')
    )
  }

  return (
    <Fragment>
      <TopNav/>
      <form onSubmit={event => event.preventDefault()}>
        Menu Item:
        <br></br>
        <input
          type="text"
          name="Menu"
          onChange={event => setOrder(event.target.value)}
        ></input>
        <br></br>
        <button onClick={()=>sendOrder()}>Order Now!</button>
      </form>
    </Fragment>
  )
}