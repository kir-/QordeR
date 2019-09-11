import React, {useState} from 'react';

export default function loader(props){
  const [message, setMessage] = useState('load')
  let ws = new WebSocket('ws://localhost:3001');
  // ws.onopen = function(){
  //   ws.send('Hello Server!');
  // };

  ws.onmessage = function (event) {
    console.log('Message from server ', JSON.parse(event.data));
  };
  return (<h1>loading</h1>)
}