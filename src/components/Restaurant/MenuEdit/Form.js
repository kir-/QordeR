import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    setCategoryName(props.categoryName)
    setItemName(props.itemName)
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
        <TextField
          label="Category Name"
          className={classes.textField}
          type="text"
          name="name"
          margin="normal"
          value={categoryName || ''}
          onChange={(event) => setCategoryName(event.target.value)}
        />
        {
          props.itemName &&
          <TextField
            label="Item Name"
            className={classes.textField}
            type="text"
            name="name"
            margin="normal"
            value={itemName || ''}
            onChange={(event) => setItemName(event.target.value)}
          />
        }
        <div>
          <Button type="submit" onClick={() => editMenuState()} variant="outlined" color="primary" className={classes.button}>
            Save
          </Button>
          {
            props.itemName &&
            <Button type="submit" onClick={() => deleteItem()} variant="outlined" color="secondary" className={classes.button}>
              Delete Item
            </Button>
          }
        </div>
      </form>
    </div>
  );
};