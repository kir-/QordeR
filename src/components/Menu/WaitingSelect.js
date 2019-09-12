import React from 'react';
import TopBar from './../TopBar';

export default function TotalOrder(props){
  return( 
    <div>
      <TopBar title="Miku"/>
      <br/>
      <br/>
      <br/>  
      <p align="center">Waiting for other customers to complete their form</p>
      <div align="center">
        {props.load && (<div className="loader"></div>)}
      </div>
    </div>
    )
}