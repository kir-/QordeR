import React from "react";
import TopBar from 'components/TopBar';
import Menu from 'components/Menu';
const axios = require('axios');
import 'typeface-roboto';


<<<<<<< Updated upstream
export default function Application(props) {
  axios.get(`/${props.tableId}`).then(()=>{console.log("Success")});
=======
export default function Application() {
>>>>>>> Stashed changes
  return (
    <div>
      <TopBar title="Miku" tableId={props.tableId}/>
      <br/>
      <div>
        <Menu tableId={props.tableId}/>
      </div>
    </div>
  )
}
// <h1 style={{color: "red"}}> QordeR </h1>