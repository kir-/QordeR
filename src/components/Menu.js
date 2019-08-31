import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Item from "./Item.js";
import Cart from "./Cart.js";

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

// fake datas
const arr_app = [
  "Miso Soup",
  "House Green Salad",
  "Gyoze",
  "Edamame",
  "Harumaki",
  "Seaweed Salad",
  "Agedashi Tofu",
  "Sunomono Salad",
  "Chicken Karage",
  "Soft Shell Crab",
  "Tuna Tataki",
  "Potato Croquette",
  "Tuna Carppachio"
];
const arr_tempura = [
  "Prawn Tempura",
  "Yam Tempura",
  "Vegetable Tempura",
  "Assorted Tempura",
  "Appetizer Tempura",
  "Sweet Potato Tempura"
];
const arr_udon = [
  "Plain Udon",
  "Beef Udon",
  "Chicken Udon",
  "Seafood Udon",
  "Beef Yakiudon",
  "Chicken Yakiudon",
  "Seafood Yakiudon",
  "Nabeyaki Udon"
];
const arr_carte = [
  "Chicken Teriyaki",
  "Beef Teriyaki",
  "Chicken Curry",
  "Beef Curry",
  "Chicken Teriyaki Donburi",
  "Beef Teriyaki Donburi",
  "Sable Fish",
  "Unagi Donburi"
];

const arr_maki = [
  "Kappa Roll",
  "Oshinko Roll",
  "Salmon Roll",
  "Tuna Roll",
  "Negitoro Roll",
  "California Roll",
  "Salmon Avocado Roll",
  "Yam Tempura Roll",
  "BC Roll",
  "Dynamite Roll",
  "Mango Roll",
  "Philadelphia Roll",
  "Unagi Roll",
  "Chopped Scallop Roll",
  "Spicy Salmon Roll",
  "Spicy Tuna Roll"
];

const arr_temaki = [
  "Tuna Cone",
  "Salmon Cone",
  "Chopped Scallop Cone",
  "Spicy Tuna Cone",
  "Spicy Salmon Cone",
  "Spicy Chopped Scallop Cone"
];
const arr_nigiri = [
  "Inari",
  "Tamago",
  "Hokkigai",
  "Wakame",
  "Tuna",
  "Salmon",
  "Sockeye Salmon",
  "Masago",
  "Saba",
  "Ebi",
  "Chopped Scallop",
  "Tobiko",
  "Tai",
  "Ika",
  "Toro",
  "Tobiko & Quall Egg",
  "Smoke Salmon",
  "Tako",
  "Amaebi",
  "Hotategai",
  "Unagi",
  "Ikura",
  "Hamachi",
  "Red Tuna",
  "Uni"
];

const arr_sashimi = [
  "Salmon Sashimi",
  "Tuna Sashimi",
  "Spicy Salmon Sashimi",
  "Spicy Tuna Sashimi",
  "Tuna & Salmon Sashimi",
  "Sockeye Salmon Sashimi",
  "Hokkigai Sashimi",
  "Toro Sashimi",
  "Tako Sashimi",
  "Amaebi Sashimi",
  "Hamachi Sashimi",
  "Assorted Sashimi",
  "Red Tuna Sashimi",
  "Uni Sashimi"
];

const arr_combo = [
  "Party Tray A",
  "Party Tray B",
  "Party Tray C",
  "Spicy Combo"
];

export default function Menu() {
  // Menu Components

  const classes = useStyles();
  const [appetizer, setAppetizer] = React.useState(false);
  const [tempura, setTempura] = React.useState(false);
  const [udon, setUdon] = React.useState(false);
  const [carte, setCarte] = React.useState(false);
  const [maki, setMaki] = React.useState(false);
  const [temaki, setTemaki] = React.useState(false);
  const [nigiri, setNigiri] = React.useState(false);
  const [sashimi, setSashimi] = React.useState(false);
  const [combination, setCombination] = React.useState(false);
  const [orderLength, setOrderLength] = React.useState(0);
  const [cart, setCart] = React.useState(false);
  // These are states that need to be refactored later with Reducer or Redux

  if (!cart) {
    // if Cart state is false it will render menu list
    return (
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
        <ListItem
          button
          onClick={() =>
            appetizer ? setAppetizer(!appetizer) : setAppetizer(!appetizer)
          }
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Appetizer" />
          {appetizer ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={appetizer} timeout="auto" unmountOnExit>
          {arr_app.map(value => {
            return (
              <Item
                length={orderLength}
                setLength={setOrderLength}
                order={orderList}
                name={value}
              />
            );
          })}
        </Collapse>
        <ListItem
          button
          onClick={() =>
            tempura ? setTempura(!tempura) : setTempura(!tempura)
          }
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Tempura" />
          {tempura ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={tempura} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {arr_tempura.map(value => {
              return (
                <Item
                  length={orderLength}
                  setLength={setOrderLength}
                  order={orderList}
                  name={value}
                />
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => (udon ? setUdon(!udon) : setUdon(!udon))}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Udon" />
          {udon ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={udon} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {arr_udon.map(value => {
              return (
                <Item
                  length={orderLength}
                  setLength={setOrderLength}
                  order={orderList}
                  name={value}
                />
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => (carte ? setCarte(!carte) : setCarte(!carte))}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Carte" />
          {carte ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={carte} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {arr_carte.map(value => {
              return (
                <Item
                  length={orderLength}
                  setLength={setOrderLength}
                  order={orderList}
                  name={value}
                />
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => (maki ? setMaki(!maki) : setMaki(!maki))}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Maki" />
          {maki ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={maki} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {arr_maki.map(value => {
              return (
                <Item
                  length={orderLength}
                  setLength={setOrderLength}
                  order={orderList}
                  name={value}
                />
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => (temaki ? setTemaki(!temaki) : setTemaki(!temaki))}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Temaki" />
          {temaki ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={temaki} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {arr_temaki.map(value => {
              return (
                <Item
                  length={orderLength}
                  setLength={setOrderLength}
                  order={orderList}
                  name={value}
                />
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => (nigiri ? setNigiri(!nigiri) : setNigiri(!nigiri))}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Nigiri" />
          {nigiri ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={nigiri} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {arr_nigiri.map(value => {
              return (
                <Item
                  length={orderLength}
                  setLength={setOrderLength}
                  order={orderList}
                  name={value}
                />
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() =>
            sashimi ? setSashimi(!sashimi) : setSashimi(!sashimi)
          }
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Sashimi" />
          {sashimi ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={sashimi} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {arr_sashimi.map(value => {
              return (
                <Item
                  length={orderLength}
                  setLength={setOrderLength}
                  order={orderList}
                  name={value}
                />
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() =>
            combination
              ? setCombination(!combination)
              : setCombination(!combination)
          }
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Combination" />
          {combination ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={combination} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {arr_combo.map(value => {
              return (
                <Item
                  length={orderLength}
                  setLength={setOrderLength}
                  order={orderList}
                  name={value}
                />
              );
            })}
          </List>
        </Collapse>
        <button onClick={() => setCart(true)}>Checkout {orderLength}</button>
      </List>
    );
  } else {
    // if cart state is true, it will render cart page
    return (
      <div>
        <button onClick={() => setCart(false)}>0==8</button>
        <Cart order={orderList} />
      </div>
    );
  }
}
