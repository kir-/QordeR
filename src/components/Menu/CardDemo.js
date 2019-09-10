import React from "react";
import StripeCheckout from "react-stripe-checkout"


export default function CardDemo() {

  function handleToken (token, addresses){
    console.log({ token, addresses })
  }

  return (
    <div className="container">
      <div className="product">
        <h1>sushi</h1>
        <h3>On Sale · $99</h3>
        <StripeCheckout 
        stripeKey="pk_test_TK9R3NMHts3AY8Bdd34iQ5AN002xytpmOT"
        token={handleToken}
        billingAddress
        />
      </div>
    </div>
  );
}
