import React, { useState } from 'react';
import { Paper, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

// this component must receive from a parent a function to persist data to the database

// this component needs time_ordered, time_accepted, time_completed from ORDER_DETAILS
// if time_ordered is null, well then the item shouldn't exist
// if time_accepted is null but time_ordered is not null, it has freshly arrived and we have not processed it yet
// if time_completed is null but time_accepted and time_ordered are not null, we are waiting for the cooks to make the food
// if none of the times are null, we are waiting to send it
// if the item is sent, mark status as complete and remove the button

const PENDING = "Pending";
const ACCEPT = "Accept";
const COOKING = "Cooking";
const COOKED = "Cooked";
const READY = "Ready to send";
const SEND = "Send";
const SENT = "Sent";

export default function TableOrder(props) {
  const [status, setStatus] = useState(props.status)

  const renderStatusBadge = function() {
    let description;
    if (status === SENT) {
      description = 'light'
    } else if (status === READY) {
      description = 'success';
    } else if (status === COOKING) {
      description = 'warning';
    } else {
      description = 'danger'
    }
    return (
      <span class={`badge badge-${description}`}>{status}</span>
    )
  };

  const renderButton = function() {
    let buttonText;
    let newStatus;
    if (status === PENDING) {
      buttonText = ACCEPT;
      newStatus = COOKING;
    } else if (status === COOKING) {
      buttonText = COOKED;
      newStatus = READY;
    } else if (status === READY) {
      buttonText = SEND;
      newStatus = SENT;
    }
    return (
      <Button onClick={() => setStatus(newStatus)} class='btn btn-outline-primary btn-sm'>{buttonText}</Button>
    )
  }

  return (
    <Paper>
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
          {console.log(props.items)}
          {Array.isArray(props.items) && props.items.map((item) => {
            return (
              <TableRow>
                <TableCell>{item.item_name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.time_ordered}</TableCell>
                <TableCell>{renderStatusBadge()}</TableCell>
                <TableCell>{status !== SENT && renderButton()}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}
