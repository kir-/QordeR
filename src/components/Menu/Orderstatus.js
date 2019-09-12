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
import StripeCheckout from "react-stripe-checkout";
import TotalOrder from 'components/Menu/TotalOrder';
import SelectItems from 'components/Menu/SelectItems';
import WaitingSelect from 'components/Menu/WaitingSelect';
import StripePay from 'components/Menu/StripePay';
import "./loader.css"
const axios = require('axios');
import { navigate } from 'hookrouter';
import Order from '../Order';

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

const TOTAL = "TOTAL";
const TOTALSELECT = "TOTALSELECT";
const LOADING = "LOADING";
const STRIPE = "STRIPE";
const PAID = "PAID"

export default function SimpleTable(props) {
  const classes = useStyles();
  const [mode, setMode] = useState(TOTAL);
  const [order, setOrder] = useState('');
  const [load, setLoad] = useState('true')
  const [receipt, setReceipt] = useState([])
  const [total, setTotal] = useState('')
  const [checkedItems, setCheckItems] = useState([])
  let checkedItem = []
  let email;

  const makeReceipt = function(web){
    let checkedItemin = checkedItem;
    if(web){
      checkedItemin = checkedItems;
    } 
    console.log("checkeditems makeReciept: ", checkedItemin)
    axios.post('/calculate_payment', {items: checkedItemin})
      .then((response)=>{
        console.log(response.data)
        setReceipt(response.data)
      })
    }

  const calculate = function(web){
    let checkedItemin = checkedItem;
    if(web){
      checkedItemin = checkedItems;
    } 
    console.log("checkeditems calculate: ", checkedItemin)
    axios.post('/calculate_total', {items: checkedItemin})
      .then((response)=>{
        console.log("total: ",response.data)
        if (response.data <= 0){
          setMode(PAID)
        } else {
          setTotal(response.data)
          setMode(STRIPE)
        }
        
      })
    }

  ws.onmessage = function (event) {
    console.log('Message from server ', event.data);
    if (event.data && JSON.parse(event.data) && JSON.parse(event.data).table_id){
      console.log("inside table")
      let paid = JSON.parse(event.data);
      if(paid.table_id === props.tableId){
        console.log("inside table match")
        if (paid.success){
          if(checkedItem) {
            console.log("inside checked iitem")
            calculate(true)
            makeReceipt(true)
          } else {
            console.log("inside paid")
            setMode(PAID)
          }
        } else {
          axios.get(`/${props.tableId}/pay/reset`)
            .then(()=>{
              axios.get(`/${props.tableId}/order`)
                .then((response)=>{
                checkedItem = []
                console.log(response.data)
                setOrder(response.data)
                setMode(TOTAL)
                })
            })
        }
      }
    }
  };
  
const clear = function(){
  checkedItem = []
  axios.get(`/${props.tableId}/order`)
      .then((response)=>{
        console.log(response.data)
        setOrder(response.data)
        setMode(TOTAL)
  })
}

  function checkItem (name, id) {
    const checkBox = document.getElementById(name);
    if (checkBox.checked === true){
      checkedItem.push(id)
    }
    if (!checkBox.checked){
      checkedItem = checkedItem.filter(item => item !== id)
    }
  }

  function sendPayment(){
    axios.post(`/${props.tableId}/pay/confirm`, {price: parseInt(total*100)})
      .then(()=>{
        axios.get(`/${props.tableId}/pay/done`)
      })
  }

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
        setMode(TOTAL)
      })
  },[])

  function handleToken (token, addresses){
    email = (token.email)
    setMode(PAID)
    sendPayment()
  }

  function splitBill () {
    console.log(checkedItem)
    axios.post(`/${props.tableId}/pay`, {items: checkedItem})
      .then((response)=>{
        if (response.data === 'not paid'){
          setMode(LOADING)
          setCheckItems(checkedItem)
        } else if(response.data === 'please try again'){
          axios.get(`/${props.tableId}/order`)
                .then((response)=>{
                console.log(order)
                checkedItem = []
                setOrder(response.data)
                setMode(TOTAL)
              })
        } else if (response.data === 'success') {
          calculate(false)
          makeReceipt(false)
          setMode(STRIPE)
        }
        console.log(response.data)
      })
  }
  if(order){
    if (mode === TOTAL) {
        return(<TotalOrder 
          checkout={()=>setMode(TOTALSELECT)}
          goBack={()=>goBack()}
          order={order}
          classes={classes}
        />)
      }
    else if (mode === TOTALSELECT) {
          return (<SelectItems
            splitBill={()=>splitBill()}
            clear={() => clear(TOTAL)}
            checkItem={(name, id)=>checkItem(name, id)}
            order={order}
            classes={classes}
          />)
          }
    else if (mode === LOADING) {
      return (
        <WaitingSelect
        load={load}
        />
      )
    }  
    else if (mode === STRIPE) {
        return (
          <StripePay
          handleToken={handleToken}
          total={parseInt(total*100)}
          receipt={receipt}
          classes={classes}
          />
        )
      }  
    else if (mode === PAID){
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
            {/* <p>
              Receipt has been sent to :
            </p> */}
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