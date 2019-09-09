import React, { Fragment, useState } from 'react';
import MenuEditForm from 'components/Restaurant/MenuEdit/Form';
import Category from 'components/Restaurant/MenuEdit/Category';
import { Button, Paper, List, ListSubheader, ListItem } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { menu } from 'fakeDb/menu';


export default function MenuEdit(props) {
  const [menuState, setMenuState] = useState(menu);
  const [showCategory, setShowCategory] = useState('');
  const [edit, setEdit] = useState({
    active: false
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col offset-2 col-4">
          <Paper>
            <List>
              <ListSubheader>Test Menu List</ListSubheader>
              {menuState.map((entry) => {
                return <Category showCategory={showCategory} setShowCategory={setShowCategory} entry={entry} setEdit={setEdit}/>
              })}
              <ListItem className="d-flex flex-row justify-content-center">
                <Button onClick={() => console.log('add category button clicked')}>
                  Category <Add/>
                </Button>
              </ListItem>
            </List>
          </Paper>
        </div>
        <div className="col col-4 mt-5">
          <Paper>
            {edit.active && <MenuEditForm setMenuState={setMenuState}/>}
          </Paper>
        </div>
      </div>
    </div>
  )
}