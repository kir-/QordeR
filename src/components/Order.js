import React, { useEffect, useState } from 'react';
import TopNav from './TopNav'
const axios = require('axios');


export default function Order(props) {
  const [order, setOrder] = useState();
  useEffect(() => {
    axios.get('/api/getMenu')
      .then(res => {
        console.log(res)
        setOrder(res.data)
      })
  }, [])
  if (order) {
    return (
      <div className="App">
          <h1>Your Order</h1>
            <div>
              {order.map((item) => {
                return(
                  <div>
                    {item}
                  </div>
                );
              })}
            </div>
      </div>
    );
  } else {
    return <p></p> //add loading component
  }
}