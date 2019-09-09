import React, { Fragment, useState } from 'react';
import MenuEditForm from 'components/Restaurant/MenuEdit/Form';
import ShowCategory from 'components/Restaurant/MenuEdit/ShowCategory';
import { Paper, List, ListSubheader } from '@material-ui/core';
import { menu } from 'fakeDb/menu';


export default function MenuEdit(props) {
  const [menuState, setMenuState] = useState(menu);
  const [edit, setEdit] = useState({
    active: false
  });

  // state.map a single item into the list that i'm making rn
  // inside each is going to be another map to get all the items
  return (
    <div className="row">
      <div className="col offset-2 col-4">
        <Paper>
          <List>
            <ListSubheader>Test Menu List</ListSubheader>
            {menuState.map((entry) => {
              return <ShowCategory entry={entry} setEdit={setEdit}/>
            })}
          </List>
        </Paper>
      </div>
      <div className="col col-4 offset-1 d-flex flex-col justify-content-center align-items-center">
        <Paper>
          {edit.active && <MenuEditForm setMenuState={setMenuState}/>}
        </Paper>
      </div>
    </div>
  )
}