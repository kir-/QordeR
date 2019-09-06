import React, { useState } from 'react';
import axios from 'axios';
import { Button, TableRow, TableCell } from '@material-ui/core';

// this element must persist data to the database
// or it must receive from a parent a function to persist data to the database

// this element needs time_ordered, time_accepted, time_completed from ORDER_DETAILS
// if time_ordered is null, well then the item shouldn't exist
// if time_accepted is null but time_ordered is not null, it has freshly arrived and we have not processed it yet
// if time_completed is null but time_accepted and time_ordered are not null, we are waiting for the cooks to make the food

// this element needs name, price_cents, from items table

const SENT = 'SENT';

export default function TableOrder(props) {
  const [status, setStatus] = useState(props.status)

  const renderStatusBadge = function(text) {
    let description;
    if (text === "Done") {
      description = 'success';
    } else if (text === "Waiting") {
      description = 'warning';
    } else {
      description = 'danger'
    }
    return (
      <span class={`badge badge-${description}`}>{text}</span>
    )
  }

  return (
    <TableRow>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.quantity}</TableCell>
      <TableCell>{props.timeIn}</TableCell>
      <TableCell>{renderStatusBadge(props.status)}</TableCell>
      <TableCell><Button onClick={() => setStatus(SENT)} class='btn btn-primary btn-sm'>Done</Button></TableCell>
    </TableRow>
  )
}