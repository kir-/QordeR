import React from 'react';

import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

export default function Tables(props) {
  return (
    <Paper className={props.classes.list}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>
              Table #
            </TableCell>
            <TableCell>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tables.map((table) => {
            return (
              <TableRow key={table.id} selected={props.currentTable === table.id} onClick={() => props.currentTable === table.id ? props.setCurrentTable(null) : props.setCurrentTable(table.id)}>
                <TableCell>
                  {table.id}
                </TableCell>
                <TableCell>
                  {table.completed === false ? <span class="badge badge-pill badge-danger">Waiting</span> : <span class="badge badge-pill badge-success">Empty</span>}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
};