import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
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

export default function New(props) {
  const classes = useStyles();
  const [categoryName, setCategoryName] = useState(props.categoryName || '');
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    setCategoryName(props.categoryName)
  }, [props]);

  const editMenuState = function() {
    props.setMenuState((current) => {
      if (props.categoryName) {
        let existingCategoryIndex = current.findIndex((entry) => {
          return entry.category === props.categoryName;
        });
        current[existingCategoryIndex].items.push({ name: itemName, price_cents: null, image: '123' })
      } else {
        current.push({ category: categoryName, items: [] })
      }
      return [
        ...current
      ];
    })
    props.setAdd({ active: false })
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()} className="d-flex flex-column align-items-center my-2">
        <Close style={{marginRight: '-22rem'}} onClick={() => props.setAdd({active: false})}/>
        <h5>{props.type === 'category' ? "Add Category" : "Add Item"}</h5>
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
          props.type === "item" &&
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
          <Button type="submit" onClick={() => editMenuState()} variant="outlined" color="primary" className={classes.button}>
            Save
          </Button>
      </form>
    </div>
  )

}