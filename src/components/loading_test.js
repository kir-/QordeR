import React, {useState} from 'react';

export default function loader(props){
  const [message, setMessage] = useState('load')

  // let ws = new WebSocket('wss://q-order-api.herokuapp.com');
  // // let ws = new WebSocket('ws://localhost:3001');
  // // ws.onopen = function(){
  // //   ws.send('Hello Server!');
  // // };

  // ws.onmessage = function (event) {
  //   console.log('Message from server', event.data);
  // };

  // let ws = new WebSocket('wss://q-order-websocket.herokuapp.com/');
  return (<h1>loading</h1>)
}