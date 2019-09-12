import React, { useState, useEffect } from 'react';
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
import "./loader.css"
const axios = require('axios');
import { navigate } from 'hookrouter';

let ws = new WebSocket('wss://q-order-api.herokuapp.com');

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

let checkedItem = []
let email;
function checkItem (name, id) {
  const checkBox = document.getElementById(name);
  if (checkBox.checked === true){
    checkedItem.push(id)
  }
  if (!checkBox.checked){
    checkedItem = checkedItem.filter(item => item !== id)
  }
}
export default function SimpleTable(props) {
  const classes = useStyles();
  const [checkout, setCheckout] = useState(0);
  const [order, setOrder] = useState('');
  const [load, setLoad] = useState('true')

  ws.onmessage = function (event) {
    console.log('Message from server ', JSON.parse(event.data));
    if (JSON.parse(event.data) && JSON.parse(event.data).table_id){
      let paid = JSON.parse(event.data);
      if(paid.table_id === props.tableId){
        if (paid.success){
          setCheckout(3)
        } else {
          setCheckout(1)
        }
      }
    }
  };

  const goBack = function(){
    axios.post(`/${props.tableId}/ordermore`)
      .then((response)=>{
        navigate(`/${props.tableId}`)
      })
  }

  useEffect(()=>{
    console.log('useEffect')
    axios.get(`/${props.tableId}/order`)
      .then((response)=>{
        console.log(response.data)
        setOrder(response.data)
      })
  },[])

  const calculate = function(){
    axios.post('/calculate_payment', {items: checkedItem})
      .then((response)=>{
        console.log(response.data)
      })
    }

  function handleToken (token, addresses){
    email = (token.email)
    setCheckout(3)

  }

  function splitBill () {
    console.log(checkedItem)
    axios.post(`/${props.tableId}/pay`, {items: checkedItem})
      .then((response)=>{
        if (response.data === 'not paid'){
          setCheckout(2)
        } else if(response.data === 'please try again'){
          setCheckout(1)
        } else if (response.data === 'success') {
          setCheckout(3)
        }
        console.log(response.data)
      })
  }
  if(order){
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
          {order.length > 0 && order.map(item => (
            <TableRow key={item.name}>
              <TableCell style={{padding:"0px",width:"50%", paddingLeft:"5%", height:"10%"}} component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell style={{padding:"0px",width:"50%", paddingLeft:"15%", height:"10%"}} >{item.quantity}</TableCell>
            </TableRow>
          ))}
          {order.length === 0 && (<TableRow>
              <TableCell style={{padding:"0px",width:"50%", paddingLeft:"5%", height:"10%"}} component="th" scope="row">
                No Items
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </Paper>
    <div align="center">
      <Button onClick= {()=> goBack()}>Order more food</Button>
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
    else if (checkout === 1) {
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
                {order.map(item => (
                  <TableRow key={item.name}>
                      <TableCell style={{padding:"0px",width:"10%", paddingLeft:"5%", height:"10%", paddingTop:"1%"}}>
                        <input type="checkbox" name={item.name} id={item.name} onClick={()=> checkItem(item.name, item.id)}/>
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
            <Button onClick={() => setCheckout(0)}>
              Cancel
            </Button>
          </div>
          <Button style={{color:"white",
          width:"100%",
          backgroundColor:"#3f51b5",
          position:"fixed",
          bottom:"0"
          }} onClick={() => splitBill()}>Pay for Selected</Button>
          </div>
        );
    }
    else if (checkout === 2) {
      return (
        <div>
          <TopBar title="Miku"/>
          <br/>
          <br/>
          <br/>  
          <p align="center">Waiting for other customers to complete their form</p>
          <div align="center">
            {load && (<div className = "loader"></div>)}
          </div>
          <span>
              <StripeCheckout 
                stripeKey="pk_test_TK9R3NMHts3AY8Bdd34iQ5AN002xytpmOT"
                token={handleToken}
                amount={6969}
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
    else if (checkout === 3){
      return (
      <div>
        <TopBar title= "Miku"/>
        <br/>
        <br/>
        <br/>
        <div style={{marginTop:"10%"}} align="center">
          <h5>
            Thank You For Your Payment
          </h5>
          <p>
            Receipt has been sent to :
          </p>
          <p>
            {email}
          </p>
          <img
          src="https://cdn1.iconfinder.com/data/icons/learning-call-edit-location-s11/512/like-512.png"
          style={{width:"100px"}}
          />
        </div>
      </div>
      )
    } 
}
else {
  return (<p></p>)
}
}