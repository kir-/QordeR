import React, { useState } from 'react';
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
  error: {
    color: 'red'
  }
}));

export default function Item(props) {

  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [drawer, setDrawer] = useState(false)
  const [error, setError] = useState("")

  const addItem = function(count) {
    if (count > 0) {
      props.order[props.name] = count
      setDrawer(false)
      setCount(0)
      props.setOrderLength(currentLength => currentLength + 1)
    } else {
      const clearError = () => setError("");
      setError("Quantity cannot be 0!")
      clearTimeout(clearError);
      setTimeout(clearError, 2000);
    }
  }
  return (
    <div>
      <Button onClick={() => setDrawer(true)}> {props.name} </Button>
      <Drawer anchor="bottom" open={drawer} onClose={() => setDrawer(false)}>
      <List>
        <div class="d-flex justify-content-center align-items-baseline">
          <h3>{props.name}</h3>
        </div>
        <div class="d-flex justify-content-center align-items-baseline">
          <p>Quantity</p>
        </div>
        <div class="d-flex justify-content-center align-items-baseline">
          <Button onClick={() => setCount(currentCount => count > 0 ? currentCount - 1 : currentCount)}>-</Button>
          <p>{count}</p>
          <Button onClick={() => setCount(currentCount => currentCount + 1)}>+</Button>
        </div>
        <div class="d-flex justify-content-center align-items-baseline">
          <p className={classes.error}>{error}</p>
        </div>
        <div class="d-flex flex-col justify-content-center align-items-baseline">
          <IconButton onClick={() => addItem(count)} color="primary" className={classes.button} aria-label="add to shopping cart">
            <AddShoppingCartIcon/>
          </IconButton>
        </div>
      </List>
      </Drawer>
    </div>
  );
}