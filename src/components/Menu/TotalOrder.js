import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import TopBar from './../TopBar';

export default function TotalOrder(props){
  return(
    <div>
        <TopBar title="Miku"/>
        <br/>
        <br/>
        <br/>
        <h2 align="center">Your Order</h2>
        <Paper className={props.classes.root}> 
        <Table className={props.classes.table}>
        <TableHead>
        <TableRow>
          <TableCell style={{padding:"0px",width:"50%", paddingLeft:"5%", height:"10%"}}>Item</TableCell>
          <TableCell style={{padding:"0px",width:"50%", paddingLeft:"15%", height:"10%"}}>Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.order.length > 0 && props.order.map(item => (
          <TableRow key={item.name}>
            <TableCell style={{padding:"0px",width:"50%", paddingLeft:"5%", height:"10%"}} component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell style={{padding:"0px",width:"50%", paddingLeft:"15%", height:"10%"}} >{item.quantity}</TableCell>
          </TableRow>
        ))}
        {console.log("fry it ",props.order)}
        {props.order.length === 0 && (<TableRow>
            <TableCell style={{padding:"0px",width:"50%", paddingLeft:"5%", height:"10%"}} component="th" scope="row">
              No Items
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
  </Paper>
  <div align="center">
    <Button onClick={props.goBack}>Order more food</Button>
  </div>
  <Button style={{color:"white",
    width:"100%",
    backgroundColor:"#3f51b5",
    position:"fixed",
    bottom:"0",
  }} onClick={props.checkout}>Checkout</Button>
  </div>
);
}