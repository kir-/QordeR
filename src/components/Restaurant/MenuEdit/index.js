import React, { Fragment, useState } from 'react';
import Form from 'components/Restaurant/MenuEdit/Form';
import New from 'components/Restaurant/MenuEdit/New';
import Category from 'components/Restaurant/MenuEdit/Category';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, List, ListItem } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { menu } from 'fakeDb/menu';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MenuEdit(props) {
  const classes = useStyles();
  const [menuState, setMenuState] = useState(menu);
  const [showCategory, setShowCategory] = useState('');
  const [edit, setEdit] = useState({
    active: false,
    entry: {}
  });

  const [add, setAdd] = useState({
    active: false,
    type: null
  })

  const addCategory = function() {
    setAdd({
      active: true,
      type: "category"
    })
  }

  const saveMenu = function() {
    axios.post(`/api/${props.restaurantId}/menu`, { menu: menuState })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col offset-1 col-5">
          <Paper style={{maxHeight: '70vh', overflow: 'auto', marginTop: '3rem'}}>
            <List>
              {menuState && menuState.map((entry, index) => {
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
            {edit.active && <Form setEdit={setEdit} categoryName={edit.entry.categoryName} itemName={edit.entry.itemName} setMenuState={setMenuState}/>}
            {add.active && <New setAdd={setAdd} categoryName={add.categoryName} setMenuState={setMenuState} type={add.type} />}
          </Paper>
        </div>
      </div>
      <Button onClick={() => saveMenu()} variant="outlined" color="primary" className={classes.button}>Save Menu</Button>
    </div>
  )
}