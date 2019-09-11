import React, { useEffect, Fragment, useState } from 'react';
import Form from 'components/Restaurant/MenuEdit/Form';
import New from 'components/Restaurant/MenuEdit/New';
import Category from 'components/Restaurant/MenuEdit/Category';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Button, Paper, List, ListItem, FormHelperText } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MenuEdit(props) {
  const classes = useStyles();
  const [menuState, setMenuState] = useState([]);
  const [showCategory, setShowCategory] = useState('');
  const [edit, setEdit] = useState({
    active: false,
    entry: {}
  });
  const [add, setAdd] = useState({
    active: false,
    type: null
  });

  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`/api/${props.restaurantId}/menu`)
      .then((response) => {
        setMenuState(response.data)
      })
      .catch((error) => {
        setMenuState([]);
      });
  }, []);

  const addCategory = function() {
    setAdd({
      active: true,
      type: "category"
    })
  }

  const hasEmptyCategories = function() {
    let found = false;
    for (let index in menuState) {
      if (menuState[index].items.length <= 0) {
        found = true;
        break;
      }
    }
    return found;
  }

  const saveMenu = function(event) {
    event.preventDefault();
    if (hasEmptyCategories()) {
      setError('ERROR! Please make sure all categories have items! Or remove empty categories.');
    } else {
      setError('');
      axios.post(`/api/${props.restaurantId}/menu`, { menu: menuState })
        .then((response) => {
          console.log(response);
          alert("Menu has been updated")
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col offset-1 col-5">
          <Paper style={{maxHeight: '70vh', overflow: 'auto', marginTop: '3rem'}}>
            <List>
              {menuState !== [] && menuState.map((entry, index) => {
                return <Category key={index} setAdd={setAdd} setMenuState={setMenuState} showCategory={showCategory} setShowCategory={setShowCategory} entry={entry} setEdit={setEdit}/>
              })}
              <ListItem className="d-flex flex-row justify-content-center">
                <Button onClick={() => addCategory()}>
                  Category <Add/>
                </Button>
              </ListItem>
            </List>
          </Paper>
        </div>
        <div className="col col-5 mt-5">
          <Paper style={{maxHeight: '70vh', overflow: 'auto', marginTop: '3rem'}}>
            {edit.active && <Form setEdit={setEdit} categoryName={edit.entry.categoryName} itemName={edit.entry.itemName} itemPrice={edit.entry.itemPrice} setMenuState={setMenuState}/>}
            {add.active && <New setAdd={setAdd} categoryName={add.categoryName || ''} setMenuState={setMenuState} type={add.type} />}
          </Paper>
        </div>
      </div>
      <br/>
      <form onSubmit={(event) => saveMenu(event)} className="d-flex flex-column align-items-center">
        <FormControl>
          <FormHelperText error >{error}</FormHelperText>
        </FormControl>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>Save Menu</Button>
      </form>
    </div>
  )
}