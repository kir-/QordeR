import React, { useState } from 'react';

import { Paper, Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@material-ui/core';

export default function Tables(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = function(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = function(event, newPage) {
    setPage(newPage);
  }

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
          {props.tables
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((table) => {
            return (
              <TableRow key={table.id} selected={props.currentTable === table.id} onClick={() => props.currentTable === table.id ? props.setCurrentTable(null) : props.setCurrentTable(table.id)}>
                <TableCell>
                  {table.id}
                </TableCell>
                <TableCell>
                  {table.order_id !== null ? <span className="badge badge-pill badge-warning">Busy</span> : <span className="badge badge-pill badge-success">Empty</span>}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={props.tables.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
};