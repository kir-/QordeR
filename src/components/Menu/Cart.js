import React from "react";
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
    fontSize: 10
  }
}))(TableCell);
const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(2)
  },
  table: {
    minWidth: 50,
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
export default function Cart(props) {
  const deleteItem = function(index) {
    delete props.order[props.rows[index].name]
    let result = props.rows.filter(row => row.name !== props.rows[index].name)
    props.setRows(result);
    props.setOrderLength(props.orderLength - 1)
  }
  const clear = function() {
    props.setRows([])
    for (let item in props.order) delete props.order[item];
    props.setOrderLength(0)
  }
  const goBack = function() {
    props.setCart(false);
  };
  const classes = useStyles2();
  const page = 0;
  const rowsPerPage = 10;
  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);
  return (
    <div>
      <br/>
      <div>
      <button>
      <img
      src="data:image/png;base64,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"
      onClick={()=> goBack()}
      style={{width:"30px", float:"left", position:"absolute"}} 
      />
      </button>
      <div align="center">
        <h2 style={{width:"100%", display:"inline-block", marginBottom:"0px", marginTop:"10px"}}>My Cart</h2>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead style={{padding:"0px",width:"25%"}}>
                <TableRow>
                  <StyledTableCell style={{padding:"0px",width:"25%", height:"10%"}}></StyledTableCell>
                  <StyledTableCell style={{padding:"0px",width:"25%", height:"10%", paddingLeft:"10px"}}>Item</StyledTableCell>
                  <StyledTableCell style={{padding:"0px",width:"25%", height:"10%", paddingLeft:"10px"}}>Quantity</StyledTableCell>
                  <StyledTableCell style={{padding:"0px",width:"25%", height:"10%", paddingLeft:"10px"}}>Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => (
                    <TableRow key={row.name}>
                      <TableCell style={{padding:"0px",width:"25%", height:"10%"}}>
                        <Button onClick={() => deleteItem(props.rows.indexOf(row))}>x</Button>
                      </TableCell>
                      <TableCell style={{padding:"0px",width:"25%", height:"10%"}} component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell style={{padding:"0px",width:"25%", height:"10%"}}>
                        <p>
                          <input
                            type="button"
                            value="-"
                            id="btnDecrement"
                            onClick={() => decrementer(row.name, props.order, row)}
                            style={{paddingTop:"10px", paddingLeft:"10px"}}
                          />
                          <input
                            type="text"
                            readOnly="readOnly"
                            id={row.name}
                            value={row.quantity}
                            style={{width:"20px", paddingTop:"12px", paddingLeft:"0px"}}
                          />
                          <input
                            type="button"
                            value="+"
                            id="btnIncrement"
                            onClick={() => incrementer(row.name, props.order, row)}
                            style={{paddingTop:"10px", paddingLeft:"0px"}}
                          />
                        </p>
                      </TableCell>
                      <TableCell style={{padding:"0px",width:"25%", height:"10%"}}>{row.price}</TableCell>
                    </TableRow>
                  ))}
                {/* {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
              </TableBody>
            </Table>
          </div>
        </Paper>
        <Button onClick={() => clear()}>Clear Cart</Button>
      </div>
      </div>
        <Button style={{color:"white",
          width:"100%",
          backgroundColor:"#3f51b5",
          position:"fixed",
          bottom:"0"
          }} onClick={() => console.log(props.rows)}>Place Order</Button>
    </div>
  );
}
