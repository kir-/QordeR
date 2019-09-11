import React, { Fragment } from 'react';
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

  const removeCategory = function(event) {
    event.stopPropagation();
    props.setMenuState((current) => {
      let existingCategoryIndex = current.findIndex((entry) => {
        return entry.category === props.entry.category
      });
      current.splice(existingCategoryIndex, 1);
      return [
        ...current
      ];
    });
  }

  const addItem = function(event, categoryName) {
    event.stopPropagation();
    props.setAdd({
      active: true,
      type: 'item',
      categoryName
    });
  }

  const editItem = function(event, categoryName, itemName, itemPrice) {
    event.stopPropagation();
    props.setEdit((current) => {
      return ({
        active: true,
        entry: {
          categoryName,
          itemName,
          itemPrice
        }
      });
    });
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
        {props.entry.items && props.entry.items.map((item, index) => {
          return (
            <ListItem key={index} button onClick={(event) => editItem(event, props.entry.category, item.name, item.price_cents)}>
              <ListItemText className='offset-1 col-8'>{item.name}</ListItemText>
              <ListItemText className='col-1'>${(item.price_cents/100.0).toFixed(2)}</ListItemText>
            </ListItem>
          );
        })}
        <ListItem className="d-flex justify-content-center">
          <Button onClick={(event) => addItem(event, props.entry.category)}>
            Item <Add/>
          </Button>
        </ListItem>
      </Collapse>
    </Fragment>
  );
};