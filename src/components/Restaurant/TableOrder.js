import React from 'react';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import TableOrderItem from 'components/Restaurant/TableOrderItem';

// this component must receive from a parent a function to persist data to the database

// this component needs time_ordered, time_accepted, time_completed from ORDER_DETAILS
// if time_ordered is null, well then the item shouldn't exist
// if time_accepted is null but time_ordered is not null, it has freshly arrived and we have not processed it yet
// if time_completed is null but time_accepted and time_ordered are not null, we are waiting for the cooks to make the food
// if none of the times are null, we are waiting to send it
// if the item is sent, mark status as complete and remove the button

export default function TableOrder(props) {

  return (
    <Paper className={props.classes.order}>
      <h4>Order for Table {props.currentTable}</h4>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Time In</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(props.items) && props.items.length > 0 ? props.items.map((item) => {
            return (
              <TableOrderItem item={item}/>
            )
          }) : <TableRow><TableCell/><TableCell/><TableCell>Table Empty</TableCell><TableCell/><TableCell/></TableRow>}
        </TableBody>
      </Table>
    </Paper>
  )
}