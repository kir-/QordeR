import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import TopBar from './../TopBar';

export default function SelectItems(props){
  return(
    <div>
      <TopBar title="Miku"/>
      <br/>
      <br/>
      <br/>
      <h2 align="center">Your Order</h2>
    <Paper className={props.classes.root}> 
      <Table className={props.classes.table}>
        <TableHead style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
          <TableRow style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
            <TableCell style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}></TableCell>
            <TableCell style={{padding:"0px",width:"60%", paddingLeft:"5%", height:"10%"}}>Item</TableCell>
            <TableCell style={{padding:"0px",width:"15%", height:"10%"}}>Quantity</TableCell>
            <TableCell style={{padding:"0px",width:"15%", paddingLeft:"5%", height:"10%"}}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
          {props.order.map(item => (
            <TableRow key={item.name}>
                <TableCell style={{padding:"0px",width:"10%", paddingLeft:"5%", height:"10%", paddingTop:"1%"}}>
                  <input type="checkbox" name={item.name} id={item.name} onClick={()=> props.checkItem(item.name, item.id)}/>
                </TableCell>
              <TableCell style={{padding:"0px",width:"60%", paddingLeft:"5%", height:"10%"}} component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell style={{padding:"0px",width:"15%", paddingLeft:"5%", height:"10%"}}>{item.quantity}</TableCell>
              <TableCell style={{padding:"0px",width:"15%", paddingLeft:"5%", height:"10%"}}>{'$'+((item.price_cents *  item.quantity)/100).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <div align="center">
      <Button onClick={props.clear}>
        Cancel
      </Button>
    </div>
    <Button style={{color:"white",
    width:"100%",
    backgroundColor:"#3f51b5",
    position:"fixed",
    bottom:"0"
    }} onClick={props.splitBill}>Pay for Selected</Button>
    </div>
  )
}