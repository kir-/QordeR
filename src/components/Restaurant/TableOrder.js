import React, { useState, useEffect } from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

export default function TableOrder(props) {

  return (
    <TableBody>
      <TableRow>
        <TableCell>Lamb Chop</TableCell>
        <TableCell>2</TableCell>
        <TableCell>1</TableCell>
        <TableCell><span class='badge badge-pill badge-danger'>Waiting</span></TableCell>
      </TableRow>
    </TableBody>
  )
}