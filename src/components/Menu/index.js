import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse, Button, ButtonGroup } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { menu } from "fakeDb/menu"

import Item from "components/Menu/Item";
import Cart from "components/Menu/Cart";

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
let rows = [];

export default function Menu() {
  const [state, setState] = useState("");
  const [cart, setCart] = React.useState(false);
  const [orderLength, setOrderLength] = React.useState(0);
  const classes = useStyles();

  function createData(name, quantity, price) {
    return { name, quantity, price };
  }
  const makeRows = function() {
    const items = Object.keys(orderList);
    const quantity = Object.values(orderList);
    rows = []
    for (let i = 0; i < items.length; i++) {
      rows.push(createData(items[i], quantity[i]));
    }
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
            <InboxIcon />
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
      <div class="d-flex justify-content-center align-items-baseline">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menu
            </ListSubheader>
          }
          className={classes.root}
        >
        {menuList}
            <ButtonGroup fullWidth aria-label="full width outlined button group">
             <Button onClick={() => makeRows()}>Checkout {orderLength}</Button>
           </ButtonGroup>
        </List>
      </div>
    );
  } else {
    // if cart state is true, it will render cart page
    return (
      <Cart setOrderLength={setOrderLength} setCart={()=> setCart()} order={orderList} rows={rows} />
    );
  }
}