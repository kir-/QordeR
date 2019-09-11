import React from "react";
import TopBar from 'components/TopBar';
import Menu from 'components/Menu';
const axios = require('axios');
import 'typeface-roboto';


export default function Application(props) {
  axios.get(`/${props.tableId}`).then(()=>{console.log("Success")});
  return (
    <div>
      <TopBar title="Miku" tableId={props.tableId}/>
      <br/>
      <Menu/>
    </div>
  )
}
// <h1 style={{color: "red"}}> QordeR </h1>