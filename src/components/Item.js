import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function Item(props) {
  
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [state, setState] = React.useState({
    bottom: false,
  });
  const counter = function(count) {
    if (count >= 0) {
      setCount(count)
    }
  }
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const addItem = function(count) {
      props.order[props.name] = count
      setState({bottom: false})
      setCount(0)
      props.setLength(props.length + 1)
      console.log(props.order)
  }
  return (
    <div>
      <Button onClick={toggleDrawer('bottom', true)}> {props.name} </Button>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
      <div
      role="presentation"
      onKeyDown={toggleDrawer("bottom", false)}
    >
      <List>
        <p> {props.name} </p>
        <hr/>
        <p> Quantity </p>
        <Button onClick={() => counter(count + 1)}>+</Button>
        <p>{count}</p>
        <Button onClick={() => counter(count - 1)}>-</Button>
        <IconButton onClick={() => addItem(count)} color="primary" className={classes.button} aria-label="add to shopping cart">
          <AddShoppingCartIcon/>
        </IconButton>
      </List>
    </div>
      </Drawer>
    </div>
  );
}