import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TopBar from '../TopBar';
import Button from "@material-ui/core/Button";
import StripeCheckout from "react-stripe-checkout"
import ButtonGroup from "@material-ui/core"
import "./loader.css"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 250,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function handleToken (token, addresses){
    console.log({ token, addresses })
}

export default function SimpleTable() {
  const classes = useStyles();
  const [checkout, setCheckout] = useState(0);
  if (checkout === 0) {
  return (
      <div>
          <TopBar title="Miku"/>
          <br/>
          <br/>
          <br/>
          <h2 align="center">Your Order</h2>
    <Paper className={classes.root}> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{padding:"0px",width:"50%", paddingLeft:"5%", height:"10%"}}>Item</TableCell>
            <TableCell style={{padding:"0px",width:"50%", paddingLeft:"15%", height:"10%"}}>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell style={{padding:"0px",width:"50%", paddingLeft:"5%", height:"10%"}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{padding:"0px",width:"50%", paddingLeft:"15%", height:"10%"}} >{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <div align="center">
      <Button href="/">Order more food</Button>
    </div>
    <Button style={{color:"white",
      width:"100%",
      backgroundColor:"#3f51b5",
      position:"fixed",
      bottom:"0",
    }} onClick= {()=> setCheckout(1)}>Checkout</Button>
    </div>
  );
    }
    if (checkout === 1) {
        return (
            <div>
                <TopBar title="Miku"/>
                <br/>
                <br/>
                <br/>
                <h2 align="center">Your Order</h2>
          <Paper className={classes.root}> 
            <Table className={classes.table}>
              <TableHead style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
                <TableRow style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
                  <TableCell style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}></TableCell>
                  <TableCell style={{padding:"0px",width:"60%", paddingLeft:"5%", height:"10%"}}>Item</TableCell>
                  <TableCell style={{padding:"0px",width:"15%", height:"10%"}}>Quantity</TableCell>
                  <TableCell style={{padding:"0px",width:"15%", paddingLeft:"5%", height:"10%"}}>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{padding:"0px",width:"10%", paddingLeft:"10%", height:"10%"}}>
                {rows.map(row => (
                  <TableRow key={row.name}>
                      <TableCell style={{padding:"0px",width:"10%", paddingLeft:"5%", height:"10%", paddingTop:"1%"}}>
                        <input type="checkbox" name="vehicle1" value="Bike"/>
                      </TableCell>
                    <TableCell style={{padding:"0px",width:"60%", paddingLeft:"5%", height:"10%"}} component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell style={{padding:"0px",width:"15%", paddingLeft:"5%", height:"10%"}}>{row.carbs}</TableCell>
                    <TableCell style={{padding:"0px",width:"15%", paddingLeft:"5%", height:"10%"}}>$50</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <div align="center">
            <Button onClick={() => setCheckout(0)}>
              Cancel
            </Button>
          </div>
          <Button style={{color:"white",
          width:"100%",
          backgroundColor:"#3f51b5",
          position:"fixed",
          bottom:"0"
          }} onClick={() => setCheckout(2)}>Pay for Selected</Button>
          </div>
        );
    }
    if (checkout === 2) {
      return (
        <div>
          <TopBar title="Miku"/>
          <br/>
          <br/>
          <br/>  
          <p align="center">Waiting for other customers to complete their form</p>
          <div align="center">
            <div className = "loader"></div>
          </div>
          <div>
              <StripeCheckout 
                stripeKey="pk_test_TK9R3NMHts3AY8Bdd34iQ5AN002xytpmOT"
                token={handleToken}
                style={{
                color:"white",
                width:"100%",
                backgroundColor:"#3f51b5",
                position:"fixed",
                bottom:"0",
                }}
              />
          </div>
        </div>
      )
    }  
}
