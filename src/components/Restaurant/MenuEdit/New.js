import React, { Fragment, useEffect, useState } from 'react';
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
  const [categoryName, setCategoryName] = useState(props.categoryName);
  const [item, setItem] = useState({
    name: '',
    price_cents: '',
    image: '123'
  });

  useEffect(() => {
    setCategoryName(props.categoryName)
  }, [props]);

  const editMenuState = function() {
    props.setMenuState((current) => {
      if (props.categoryName) {
        let existingCategoryIndex = current.findIndex((entry) => {
          return entry.category === props.categoryName;
        });
        current[existingCategoryIndex].items.push(item)
      } else {
        current.push({ category: categoryName, items: [] })
      }
      return [
        ...current
      ];
    })
    props.setAdd({ active: false })
  }

  const updateItem = function(event, type) {
    event.persist();
    if (type === 'name') {
      setItem((current) => {
        return ({
          ...current,
          name: event.target.value
        });
      });
    } else {
      setItem((current) => {
        return ({
          ...current,
          price_cents: event.target.value
        });
      });
    }
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()} className="d-flex flex-column align-items-center my-2">
        <Close style={{marginRight: '-22rem'}} onClick={() => props.setAdd({active: false})}/>
        <h5>{props.type === 'category' ? "Add Category" : "Add Item"}</h5>
        {
          props.type === "category" &&
          <TextField
            autoFocus
            label="Category Name"
            className={classes.textField}
            type="text"
            name="name"
            margin="normal"
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
          />
        }
        {
          props.type === "item" &&
          <Fragment>
            <TextField
              autoFocus
              label="Item Name"
              className={classes.textField}
              type="text"
              name="name"
              margin="normal"
              value={item.name}
              onChange={(event) => updateItem(event, 'name')}
            />
            <TextField
              label="Item Price"
              className={classes.textField}
              type="number"
              name="name"
              margin="normal"
              value={item.price_cents}
              onChange={(event) => updateItem(event, 'price_cents')}
            />
          </Fragment>
        }
          <Button onClick={() => editMenuState()} variant="outlined" color="primary" className={classes.button}>
            Save
          </Button>
      </form>
    </div>
  )
}