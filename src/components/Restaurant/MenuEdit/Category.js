import React, { Fragment  } from 'react';
import { Collapse, Button, ListItem, ListItemText } from '@material-ui/core';
import { RemoveCircleOutline, Edit, ExpandMore, ExpandLess, Add } from '@material-ui/icons';

export default function Category(props) {
  const editCategory = function(event, categoryName) {
    event.stopPropagation();
    props.setEdit((current) => {
      return ({
        active: true,
        entry: {
          categoryName
        }
      });
    });
  }

  const editItem = function(event, categoryName, itemName) {
    event.stopPropagation();
    props.setEdit((current) => {
      return ({
        active: true,
        entry: {
          categoryName,
          itemName
        }
      });
    });
  }

  const removeCategory = function(event) {
    event.stopPropagation();
    console.log('remove category button clicked');
  }

  return (
    <Fragment>
      <ListItem button onClick={()=> props.showCategory === props.entry.category ? props.setShowCategory(null) : props.setShowCategory(props.entry.category)}>
        <Button onClick={(event) => editCategory(event, props.entry.category)}>
          <Edit/>
        </Button>
        <ListItemText>{props.entry.category}</ListItemText>
        <Button onClick={(event) => removeCategory(event)}>
          <RemoveCircleOutline/>
        </Button>
          {props.showCategory === props.entry.category ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={props.showCategory === props.entry.category} timeout="auto" unmountOnExit>
        {props.entry.items.map((item, index) => {
          return (
            <ListItem key={index} button onClick={(event) => editItem(event, props.entry.category, item.name)}>
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          );
        })}
        <ListItem className="d-flex justify-content-center">
          <Button onClick={() => console.log('add button clicked')}>
            Item <Add/>
          </Button>
        </ListItem>
      </Collapse>
    </Fragment>
  );
};