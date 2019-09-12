import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse, Button, ButtonGroup } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Item from "components/Menu/Item";
import Cart from "components/Menu/Cart";
const axios = require('axios');
import { navigate } from 'hookrouter';

// import { menu } from "fakeDb/menu"
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const orderList = {};
export default function Menu(props) {
  const [menu, setMenu] = useState("")
  const [state, setState] = useState("");
  const [rows, setRows] = useState([])
  const [cart, setCart] = React.useState(false);
  const [orderLength, setOrderLength] = React.useState(0);
  const classes = useStyles();
  function createData(name, quantity, price) {
    return { name, quantity, price };
  }
  const sendOrder = function(order){
    // let table_id = window.location.href.slice(22)
    axios.post(`/${props.tableId}/order`, {order: order})
      .then(()=>{
        navigate(`/order/${props.tableId}`);
        console.log('reached')
      })
  }
  const makeRows = function() {
    const items = Object.keys(orderList);
    let quantity = [];
    let price = [];
    
    for (let item in orderList) {
      quantity.push(orderList[item].quantity)
      price.push(orderList[item].price)
    }
    console.log("quantity",quantity)
    let tempRows = [];
    for (let i = 0; i < items.length; i++) {
      tempRows.push(createData(items[i], quantity[i], price[i]));
    }
    setRows([...tempRows])
    setCart(true)
  }
  useEffect(()=>{
    axios.get('/api/1/menu').then((response)=>{
      setMenu(response.data)
    })
  },[])
  // renders out a list of menu categories and items
  // data structure is located in fakeDb/menu.js
  // expects menu to be something like:
  //   menu = {
  //   category: "string",
  //   items: array of [
  //     name: "string",
  //     price_cents: int,
  //     image: 'url string'
  //   ]
  // }
  // can update the items to just old an array of ids later
  if(menu){
  const menuList = menu.map((entry, index) => {
    return (
      <Fragment>
        <ListItem key={index} button onClick={() =>
          state === entry.category ? setState(null) : setState(entry.category)
        }>
          <ListItemIcon>
            <img src={entry.image}
            style={{width:"33px", borderRadius:"30px"}}
            />
          </ListItemIcon>
          <ListItemText primary={entry.category} />
          {state === entry.category ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse style={{witdh:"100%"}} in={state === entry.category} timeout="auto" unmountOnExit>
          {entry.items.map(item => {
            return (
              <Item
                setOrderLength={setOrderLength}
                order={orderList}
                name={item.name}
                price={item.price_cents}
                image={item.image}
                style={{width:"100%"}}
              />
            );
          })}
        </Collapse>
      </Fragment>
    )
  })
  if (!cart) {
    // if Cart state is false it will render menu list
    return (
      <div>
        <div>
          <img
          style={{width: "100%", height: "100%", zindex:-1, position:"relative"}}
          src="https://cdn.vox-cdn.com/thumbor/CHCiw8xdogCBnB12TSRvpo4VZMY=/0x0:1000x667/1200x900/filters:focal(393x413:553x573)/cdn.vox-cdn.com/uploads/chorus_image/image/60248239/2014_nakazawafish.0.12.jpg"
          className={classes.root}
          />
          <h3 style={{color:"beige", top: "75px", left: "5%", position: "absolute"}}>
            Sushi, always the pleasure
          </h3>

        </div>
        <div class="d-flex justify-content-center align-items-baseline">
          <hr/>
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Menu
              </ListSubheader>
            }
            className={classes.root}
          >
          {menuList}
          <ButtonGroup style={{
          backgroundColor:"#3f51b5",
          position:"fixed",
          bottom:"0"
        }}fullWidth aria-label="full width outlined button group">
         <Button style={{color:"white"}} onClick={() => makeRows()}>Checkout {orderLength}</Button>
        </ButtonGroup>
          
          </List>
        </div>
        <br/>
      </div>
    );
  } else {
    // if cart state is true, it will render cart page
    return (
        <Cart setRows={setRows} setOrderLength={setOrderLength} orderLength={orderLength} setCart={()=> setCart()} order={orderList} rows={rows} sendOrder={(order)=>sendOrder(order)}/>
    );
  }
  } else {
    return (<p></p>)
  }
}
