import React from "react";
import Menu from "./Menu.js";
import Item from "./Item.js"
import 'typeface-roboto';


export default function Application() {
  
  return (
    <div>
      {/* <img
      src="https://cdn.vox-cdn.com/thumbor/CHCiw8xdogCBnB12TSRvpo4VZMY=/0x0:1000x667/1200x900/filters:focal(393x413:553x573)/cdn.vox-cdn.com/uploads/chorus_image/image/60248239/2014_nakazawafish.0.12.jpg"
      /> */}
      <h1 style={{color: "red"}}> QordeR </h1>
      <Menu/>
    </div>
  )
}