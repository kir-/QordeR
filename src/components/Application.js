import React from "react";
import TopBar from 'components/TopBar';
import Menu from 'components/Menu';
import 'typeface-roboto';


export default function Application() {

  return (
    <div>
      <TopBar title="Miku"/>
      <br/>
      <div>
        <Menu/>
      </div>
    </div>
  )
}
// <h1 style={{color: "red"}}> QordeR </h1>