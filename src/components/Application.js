import React from "react";
import Menu from './Menu';
import TopBar from "./TopBar.js";
import 'typeface-roboto';


export default function Application() {

  return (
    <div>
      <TopBar title="Restaurant Name"/>
      <br/>
      <br/>
      <br/>
      {/* <img
      src="https://cdn.vox-cdn.com/thumbor/CHCiw8xdogCBnB12TSRvpo4VZMY=/0x0:1000x667/1200x900/filters:focal(393x413:553x573)/cdn.vox-cdn.com/uploads/chorus_image/image/60248239/2014_nakazawafish.0.12.jpg"
      /> */}
      <Menu/>
    </div>
  )
}
// <h1 style={{color: "red"}}> QordeR </h1>