import React, { Fragment, useState } from 'react';
import { Collapse, Button, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Edit, ExpandMore, ExpandLess } from '@material-ui/icons';

export default function Show(props) {
  const [showCategory, setShowCategory] = useState(null);

  const editCategory = function(event) {
    event.stopPropagation();
    props.setEdit((current) => {
      return {
        ...current,
        active: true
      }
      });
  }

  return (
    <Fragment>
      <ListItem button onClick={()=> showCategory === props.entry.category ? setShowCategory(null) : setShowCategory(props.entry.category)}>
        <Button onClick={(event) => editCategory(event)}>
          <Edit/>
        </Button>
        <ListItemText>{props.entry.category}</ListItemText>
          {showCategory === props.entry.category ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={showCategory === props.entry.category} timeout="auto" unmountOnExit>
        {props.entry.items.map((item) => {
          return <ListItem>{item.name}</ListItem>
        })}
      </Collapse>
    </Fragment>
  );
};