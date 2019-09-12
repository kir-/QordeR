import React from 'react';
import TopBar from './../TopBar';
import StripeCheckout from "react-stripe-checkout";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function TotalOrder(props){
  return( 
    <div>
      <TopBar title="Miku"/>
      <br/>
      <br/>
      <br/>  
      <p align="center">Receipt</p>
      <Paper className={props.classes.root}> 
      <Table className={props.classes.table}>
        <TableHead style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
          <TableRow style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
            <TableCell style={{padding:"0px",width:"30%", paddingLeft:"10%", height:"10%"}}>Item</TableCell>
            <TableCell style={{padding:"0px",width:"30%", paddingLeft:"15%", height:"10%"}}>Quantity</TableCell>
            <TableCell style={{padding:"0px",width:"30%", paddingLeft:"20%", height:"10%"}}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
          {props.receipt.map(item => (
            <TableRow key={item.name}>
                <TableCell style={{padding:"0px",width:"30%", paddingLeft:"10%", height:"10%", paddingTop:"1%"}}>
                {item.name + "/" + item.divide}
                </TableCell>
              <TableCell style={{padding:"0px",width:"30%", paddingLeft:"15%", height:"10%"}} component="th" scope="row">
                {item.quantity}
              </TableCell>
              <TableCell style={{padding:"0px",width:"30%", paddingLeft:"20%", height:"10%"}}>{'$'+(((Number(item.quantity)*Number(item.price_cents))/Number(item.divide))/100).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <br/>
    <h3 align="center">Total: {'$' + props.total/100}</h3>
      <span>
                <StripeCheckout 
                  stripeKey="pk_test_TK9R3NMHts3AY8Bdd34iQ5AN002xytpmOT"
                  token={props.handleToken}
                  amount={props.total}
                  style={{
                  width:"100%",
                  position:"fixed",
                  bottom:"0",
                  }}
                />
            </span>
    </div>
    )
}