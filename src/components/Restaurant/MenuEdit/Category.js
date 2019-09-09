import React, { Fragment, useState } from 'react';
import { Collapse, Button, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { RemoveCircleOutline, Edit, ExpandMore, ExpandLess, Add } from '@material-ui/icons';

export default function Category(props) {
  const editCategory = function(event) {
    event.stopPropagation();
    props.setEdit((current) => {
      return {
        ...current,
        active: true
      }
      });
  }

  const removeCategory = function(event) {
    event.stopPropagation();
    console.log('remove category button clicked');
  }

  return (
    <Fragment>
      <ListItem button onClick={()=> props.showCategory === props.entry.category ? props.setShowCategory(null) : props.setShowCategory(props.entry.category)}>
        <Button onClick={(event) => editCategory(event)}>
          <Edit/>
        </Button>
        <ListItemText>{props.entry.category}</ListItemText>
        <Button onClick={(event) => removeCategory(event)}>
          <RemoveCircleOutline/>
        </Button>
          {props.showCategory === props.entry.category ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={props.showCategory === props.entry.category} timeout="auto" unmountOnExit>
        {props.entry.items.map((item) => {
          return (
            <ListItem button onClick={() => console.log(item.name)}>
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          );
        })}
        <ListItem class="d-flex justify-content-center">
          <Button onClick={() => console.log('add button clicked')}>
            Item <Add/>
          </Button>
        </ListItem>
      </Collapse>
    </Fragment>
  );
};