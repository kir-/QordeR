import React, { Fragment, useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Form(props) {
  const classes = useStyles();
  const [categoryName, setCategoryName] = useState(props.categoryName);
  const [itemName, setItemName] = useState(props.itemName);
  const [itemPrice, setItemPrice] = useState(props.itemPrice);

  useEffect(() => {
    setCategoryName(props.categoryName);
    setItemName(props.itemName);
    setItemPrice(props.itemPrice / 100.0);
  }, [props])

  const editMenuState = function() {
    props.setMenuState((current) => {
      let existingCategoryIndex = current.findIndex((entry) => {
        return entry.category === props.categoryName
      });
      current[existingCategoryIndex].category = categoryName;
      if (props.itemName) {
        let existingItemIndex = current[existingCategoryIndex].items.findIndex((item) => {
          return item.name === props.itemName;
        });
        current[existingCategoryIndex].items[existingItemIndex].name = itemName;
        current[existingCategoryIndex].items[existingItemIndex].price_cents = itemPrice * 100;
      }
      return [
        ...current
      ];
    });
    props.setEdit({ active: false });
  };

  const deleteItem = function() {
    props.setMenuState((current) => {
      let existingCategoryIndex = current.findIndex((entry) => {
        return entry.category === props.categoryName
      });
      let existingItemIndex = current[existingCategoryIndex].items.findIndex((item) => {
        return item.name === props.itemName;
      });
      current[existingCategoryIndex].items.splice(existingItemIndex, 1);
      return [
        ...current
      ];
    });
    props.setEdit({ active: false });
  };

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()} className="d-flex flex-column align-items-center my-2">
        <Close style={{marginRight: '-22rem'}} onClick={() => props.setEdit({active: false})}/>
        {
          !props.itemName &&
          <TextField
            label="Category Name"
            className={classes.textField}
            type="text"
            margin="normal"
            value={categoryName || ''}
            onChange={(event) => setCategoryName(event.target.value)}
          />
        }
        {
          props.itemName &&
          <Fragment>
            <TextField
              label="Item Name"
              className={classes.textField}
              type="text"
              margin="normal"
              value={itemName || ''}
              onChange={(event) => setItemName(event.target.value)}
            />
            <TextField
              label="Item Price"
              className={classes.textField}
              type="number"
              margin="normal"
              value={itemPrice || ''}
              onChange={(event) => setItemPrice(event.target.value)}
            />
          </Fragment>
        }
        <div>
          {
            props.itemName &&
            <Button onClick={() => deleteItem()} variant="outlined" color="secondary" className={classes.button}>
              Delete Item
            </Button>
          }
          <Button onClick={() => editMenuState()} variant="outlined" color="primary" className={classes.button}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};