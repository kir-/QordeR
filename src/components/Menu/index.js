import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse, Button, ButtonGroup } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Item from "components/Menu/Item";
import Cart from "components/Menu/Cart";

import { menu } from "fakeDb/menu"
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));
const orderList = {};
export default function Menu() {
  const [state, setState] = useState("");
  const [rows, setRows] = useState([])
  const [cart, setCart] = React.useState(false);
  const [orderLength, setOrderLength] = React.useState(0);
  const classes = useStyles();
  function createData(name, quantity, price) {
    return { name, quantity, price };
  }
  const makeRows = function() {
    const items = Object.keys(orderList);
    const quantity = Object.values(orderList);
    let tempRows = []
    for (let i = 0; i < items.length; i++) {
      tempRows.push(createData(items[i], quantity[i]));
    }
    setRows([...tempRows])
    setCart(true)
  }
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

  const menuList = menu.map((entry, index) => {
    return (
      <Fragment>
        <ListItem key={index} button onClick={() =>
          state === entry.category ? setState(null) : setState(entry.category)
        }>
          <ListItemIcon>
            <img src="https://mikurestaurant.com/wp-content/uploads/2018/05/MD-Sashimi-Platter-4-1-495x400.jpg"
            style={{width:"33px", borderRadius:"30px"}}
            />
          </ListItemIcon>
          <ListItemText primary={entry.category} />
          {state === entry.category ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={state === entry.category} timeout="auto" unmountOnExit>
          {entry.items.map(item => {
            return (
              <Item
                setOrderLength={setOrderLength}
                order={orderList}
                name={item.name}
                price={item.price_cents}
                image={item.image}
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
          style={{width: "100%", height: "100%", zindex:-1}}
          src="https://cdn.vox-cdn.com/thumbor/CHCiw8xdogCBnB12TSRvpo4VZMY=/0x0:1000x667/1200x900/filters:focal(393x413:553x573)/cdn.vox-cdn.com/uploads/chorus_image/image/60248239/2014_nakazawafish.0.12.jpg"
          className={classes.root}
          />
          <h2 style={{color:"beige", top: "13%", left: "5%", position: "absolute"}}>
            Sushi, always the pleasure
          </h2>
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
        <Cart setRows={setRows} setOrderLength={setOrderLength} orderLength={orderLength} setCart={()=> setCart()} order={orderList} rows={rows} />
    );
  }
}
