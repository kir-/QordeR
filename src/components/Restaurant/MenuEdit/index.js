import React, { Fragment, useState } from 'react';
import MenuEditForm from 'components/Restaurant/MenuEdit/Form';
import Category from 'components/Restaurant/MenuEdit/Category';
import { Button, Paper, List, ListItem } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { menu } from 'fakeDb/menu';

export default function MenuEdit(props) {
  const [menuState, setMenuState] = useState(menu);
  const [showCategory, setShowCategory] = useState('');
  const [edit, setEdit] = useState({
    active: false,
    entry: {}
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col offset-1 col-5">
          <Paper style={{maxHeight: '70vh', overflow: 'auto', marginTop: '3rem'}}>
            <List>
              {menuState.map((entry, index) => {
                return <Category key={index} showCategory={showCategory} setShowCategory={setShowCategory} entry={entry} setEdit={setEdit}/>
              })}
              <ListItem className="d-flex flex-row justify-content-center">
                <Button onClick={() => console.log('add category button clicked')}>
                  Category <Add/>
                </Button>
              </ListItem>
            </List>
          </Paper>
        </div>
        <div className="col col-5 mt-5">
          <Paper style={{maxHeight: '70vh', overflow: 'auto', marginTop: '3rem'}}>
            {edit.active && <MenuEditForm setEdit={setEdit} itemName={edit.entry.itemName} categoryName={edit.entry.categoryName} setMenuState={setMenuState}/>}
          </Paper>
        </div>
      </div>
    </div>
  )
}