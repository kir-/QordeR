import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TopBar from '../TopBar';
import Button from "@material-ui/core/Button";
import StripeCheckout from "react-stripe-checkout"
import Application from "components/Application"


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function handleToken (token, addresses){
    console.log({ token, addresses })
}

export default function SimpleTable() {
  const classes = useStyles();
  const [checkout, setCheckout] = useState(false);
  if (!checkout) {
  return (
      <div>
          <TopBar title="Restaurant Name"/>
          <br/>
          <br/>
          <br/>
          <h1>Your Order</h1>
    <Paper className={classes.root}> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      <Button onClick={() => setCheckout(true)}>Checkout</Button>
      <Button href="/">Order more food</Button>
    </div>
  );
    }
    else {
        return (
            <div>
                <TopBar title="Restaurant Name"/>
                <br/>
                <br/>
                <br/>
                <h1>Your Order</h1>
                <Button onClick={() => setCheckout(false)}>x</Button>
          <Paper className={classes.root}> 
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                      <TableCell>
                        <input type="checkbox" name="vehicle1" value="Bike"/>
                      </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>$50</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
            <StripeCheckout 
        stripeKey="pk_test_TK9R3NMHts3AY8Bdd34iQ5AN002xytpmOT"
        token={handleToken}
        billingAddress
        />
          </div>
        );
          }  
}
