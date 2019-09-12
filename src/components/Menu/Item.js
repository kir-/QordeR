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
      if (props.order[props.name]) {
        let initial = Number(props.order[props.name].quantity)
        props.order[props.name].quantity = initial + Number(count)
        console.log(props.order[props.name])
        setDrawer(false)
        setCount(0)
      } else {
      props.order[props.name] = {quantity:0, price:0}
      props.order[props.name].quantity = count
      props.order[props.name].price = (props.price / 100).toFixed(2)
      setDrawer(false)
      setCount(0)
      props.setOrderLength(currentLength => currentLength + 1)
      }
    } else {
      const clearError = () => setError("");
      setError("Quantity cannot be 0!")
      clearTimeout(clearError);
      setTimeout(clearError, 2000);
    }
  }
  return (
    <div style={{witdh:"100%", clear:"both"}}>
      <button style={{width:"100%", backgroundColor:"white", borderStyle:"none"}} onClick={() => setDrawer(true)}>
          <img
          src={props.image}
          style={{marginLeft:"25px", borderRadius:"20px", float:"left", width:"25px"}}
          />
          <p style={{float:"left", marginLeft:"5px"}}>{props.name}</p>
          <p style={{marginRight:"5%", float:"right"}}>${(props.price / 100).toFixed(2)}</p>
      </button>
      <Drawer anchor="bottom" open={drawer} onClose={() => setDrawer(false)}>
      <List style={{paddingBottom:"0px"}}>
        <div align="center">
          <h5>{props.name}</h5>
        </div>
        <hr style={{marginTop:"5px"}}/>
        <div class="d-flex justify-content-center align-items-baseline">
          <img
          src={props.image}
          style={{width:"55px", borderRadius:"20px", marginTop:"10px"}}/>
        </div>
        <div class="d-flex justify-content-center align-items-baseline">
          <Button onClick={() => setCount(currentCount => count > 0 ? currentCount - 1 : currentCount)}>-</Button>
          <p>{count}</p>
          <Button onClick={() => setCount(currentCount => currentCount + 1)}>+</Button>
        </div>
        <div class="d-flex justify-content-center align-items-baseline">
          <p className={classes.error}>{error}</p>
        </div>
        <Button onClick={() => addItem(count)} style={{width:"100%", backgroundColor:"#3F51B5", height:"35px"}}>
            <AddShoppingCartIcon style={{color:"white"}}/>
        </Button>
      </List>
      </Drawer>
    </div>
  );
}