import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

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

export default function Menu() {
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

  function handleAppetizer() {
    setAppetizer(!appetizer)
  }
  function handleTempura() {
    setTempura(!tempura)
  }
  function handleUdon() {
    setUdon(!udon)
  }
  function handleCarte() {
    setCarte(!carte)
  }
  function handleMaki() {
    setMaki(!maki)
  }
  function handleTemaki() {
    setTemaki(!temaki)
  }
  function handleNigiri() {
    setNigiri(!nigiri)
  }
  function handleSashimi() {
    setSashimi(!sashimi)
  }
  function handleCombination() {
    setCombination(!combination)
  }



  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Sushi
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleAppetizer}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Appetizer" />
        {appetizer ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={appetizer} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Gyoza" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleTempura}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Tempura" />
        {tempura ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={tempura} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Prawn Tempura" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleUdon}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Udon" />
        {udon ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={udon} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Beef Udon" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleCarte}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Carte" />
        {carte ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={carte} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Chicken Teriyaki" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleMaki}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Maki" />
        {maki ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={maki} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Negitoro Roll" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleTemaki}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Temaki" />
        {temaki ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={temaki} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Spicy Tuna Cone" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleNigiri}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Nigiri" />
        {nigiri ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={nigiri} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Sockeye Salmon" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleSashimi}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Sashimi" />
        {sashimi ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={sashimi} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Toro Sashimi" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleCombination}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Combination" />
        {combination ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={combination} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Party Tray A" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}