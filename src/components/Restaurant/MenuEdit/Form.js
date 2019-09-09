import React, { useState } from 'react';
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
  const initialCategory = props.categoryName;
  const initialItem = props.itemName;
  const [categoryName, setCategoryName] = useState(initialCategory);
  const [itemName, setItemName] = useState(initialItem);

  const saveMenuState = function() {
    props.setMenuState((current) => {
      let existingCategoryIndex = current.findIndex((entry) => {
        return entry.category === initialCategory
      });
      current[existingCategoryIndex].category = categoryName;
      if (initialItem) {
        let existingItemIndex = current[existingCategoryIndex].items.findIndex((item) => {
          return item.name === initialItem;
        });
        current[existingCategoryIndex].items[existingItemIndex].name = itemName;
      }
      return [
        ...current,
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
          value={categoryName}
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
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
      }
        <Button type="submit" onClick={() => saveMenuState()} variant="outlined" color="primary" className={classes.button}>
          Save
        </Button>
      </form>
    </div>
  );
};