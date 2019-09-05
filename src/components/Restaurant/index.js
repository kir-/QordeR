import React, { useState, useEffect, Fragment } from 'react';
import TopBar from "components/TopBar";
import { navigate } from 'hookrouter';
import { useCookies } from 'react-cookie';
import { Paper, Collapse, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import MenuEdit from 'components/Restaurant/MenuEdit';
import TableOrder from 'components/Restaurant/TableOrder';
import MaterialTable from 'material-table';

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
    axios.get(`/api/getOrder/1`) // replace the 1 with ${tableId}
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
  }, []);

  useEffect(() => {
    axios.get(`/api/getOrderItems`)

  }, [currentTable])

  const renderTableOrder = function(tableId, items) {
    return (
      <Collapse in={tableId === currentTable}>
        {console.log(currentTable)}
        <Paper className={classes.order}>
          <Table>
            <TableHead>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>Status</TableCell>
            </TableHead>
            <TableBody>
              <TableCell>Test</TableCell>
              <TableCell>Test</TableCell>
              <TableCell>Test</TableCell>
              <TableCell>Test</TableCell>
            </TableBody>
          </Table>
        </Paper>
      </Collapse>
    )
  }

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
                    <TableRow onClick={() => currentTable === table.id ? setCurrentTable(null) : setCurrentTable(table.id)}>
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
          {currentTable ? renderTableOrder(currentTable) : null}
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