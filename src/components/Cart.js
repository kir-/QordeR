import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

function incrementer(name, order, row) {
  let i = document.getElementById(name);
  i.value++;
  order[name] = i.value;
  row["quantity"] = i.value;
}

function decrementer(name, order, row) {
  let i = document.getElementById(name);
  if (i.value > 1) {
    i.value--;
    order[name] = i.value;
    row["quantity"] = i.value;
  }
}
[2,3]
export default function Cart(props) {
  const [rows, setRows] = useState(props.rows)
  const deleteItem = function(index) {
    console.log(props.rows[index].name)
    let result = props.rows.filter(row => row.name !== props.rows[index].name);
    const emptyItem = rows.filter(row => row ==="empty");
    setRows(emptyItem)
    console.log(rows)
  }
  const clear = function() {
    setRows([])
    for (let item in props.order) delete props.order[item];
    props.setOrderLength(0)
  }
  const goBack = function() {
    props.setCart(false);
  };
  const classes = useStyles2();
  const page = 0;
  const rowsPerPage = 10;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <div>
      <button onClick={() => goBack()}>0==8</button>
      <div align="center">
        My Cart
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>Item</StyledTableCell>
                  <StyledTableCell>Quantity</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => (
                    <TableRow key={row.name}>
                      <TableCell>
                        <Button onClick={() => deleteItem(rows.indexOf(row))}>x</Button>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>
                        <p>
                          <input
                            type="text"
                            readOnly="readOnly"
                            id={row.name}
                            value={row.quantity}
                          />
                          <input
                            type="button"
                            value="+"
                            id="btnIncrement"
                            onClick={() => incrementer(row.name, props.order, row)}
                          />
                          <input
                            type="button"
                            value="-"
                            id="btnDecrement"
                            onClick={() => decrementer(row.name, props.order, row)}
                          />
                        </p>
                      </TableCell>
                      <TableCell>{row.price}</TableCell>
                    </TableRow>
                  ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Paper>
        <Button onClick={() => console.log(rows)}>Place Order</Button>
        <Button onClick={() => clear()}>Clear Cart</Button>
      </div>
    </div>
  );
}
