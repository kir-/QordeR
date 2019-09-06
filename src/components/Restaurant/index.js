import React, { useState, useEffect, Fragment } from 'react';
import TopBar from "components/TopBar";
import { navigate } from 'hookrouter';
import { useCookies } from 'react-cookie';
import { Paper, Collapse, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import MenuEdit from 'components/Restaurant/MenuEdit';
import TableOrder from 'components/Restaurant/TableOrder';

const axios = require('axios');

const TABLES = "TABLES";
const EDIT = "EDIT";

/*props
  id: restaurant's id
*/

const useStyles = makeStyles(theme => ({
  list: {
    width: '40vw',
    margin: 'auto'
  },
  order: {
    width: '80vw',
    margin: 'auto'
  }
}))

export default function Restaurant(props) {
  const [state, setState] = useState({
    show: TABLES,
    tables: [],
    tableOrder: []
  })
  const [cookies] = useCookies(['user']);
  const [currentTable, setCurrentTable] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    if (!cookies.user || cookies.user !== props.restoId) {
      navigate(`/admin`);
    }
  }, []);

  useEffect(() => {
    axios.get(`/api/getActiveOrder/1`) // replace the 1 with ${tableId}
      .then((response) => {
        setState((currentState) => {
          return ({
            ...currentState,
            tableOrder: response.data
          })
        })
      })
      .catch((error) => {
        setState((currentState) => {
          return ({
            ...currentState,
            tableOrder: []
          })
        })
      })
  }, [currentTable]);

  useEffect(() => {
    axios.get(`/api/getTables/${props.restoId}`)
      .then((response) => {
        setState((currentState) => {
          return ({
            ...currentState,
            tables: response.data
          });
        });
      })
      .catch((error) => {
        setState((currentState) => {
          return ({
            ...currentState
          });
        });
      });
  }, [props.restoId]);

  useEffect(() => {
    axios.get(`/api/getOrderItems`)

  }, [currentTable])

  const renderTablePage = function() {
    return (
      <Fragment>
        <Paper className={classes.list}>
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
                {state.tables.map((table) => {
                  return (
                    <TableRow selected={currentTable === table.id} onClick={() => currentTable === table.id ? setCurrentTable(null) : setCurrentTable(table.id)}>
                      <TableCell>
                        {table.id}
                      </TableCell>
                      <TableCell>
                        <span class="badge badge-pill badge-danger">Waiting</span>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
          <br/>
          <Paper>
            {currentTable && <h3>Order for Table #{currentTable}</h3>}
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
                <TableOrder name='test' quantity={3} timeIn={'test o\'clock'} status={'Waiting'} />
              </TableBody>
            </Table>
          </Paper>
      </Fragment>
    )
  };

  return (
    <Fragment>
      <TopBar title="All Orders" admin/>
      <br/>
      <br/>
      <br/>
      <div class="text-center">
        <Button onClick={() => setState(current => ({...current, show: TABLES}))}>Tables</Button> | <Button onClick={() => setState(current => ({...current, show: EDIT}))}>Edit Menu</Button>
      </div>
      <div class="text-center">
        {state.show === TABLES && renderTablePage()}
        {state.show === EDIT && <MenuEdit restaurantId={props.restoId}/>}
      </div>
    </Fragment>
  )
}