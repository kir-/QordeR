import React, { useState, useEffect, Fragment } from 'react';
import TopBar from "components/TopBar";
import { navigate } from 'hookrouter';
import { useCookies } from 'react-cookie';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import MenuEdit from 'components/Restaurant/MenuEdit/index';
import TableOrder from 'components/Restaurant/TableOrder';
import Tables from 'components/Restaurant/Tables';

let ws = new WebSocket('wss://localhost:8080');

const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8080';

const TABLES = "TABLES";
const EDIT = "EDIT";

const useStyles = makeStyles(theme => ({
  list: {
    width: '40vw',
    margin: 'auto'
  },
  order: {
    width: '90vw',
    margin: 'auto'
  },
  progress: {
    margin: theme.spacing(2),
  },
}))

export default function Restaurant(props) {
  ws.onmessage = function(event) {
    console.log('reached onmessage');
    console.log(event.data);
  }
  const [state, setState] = useState({
    show: TABLES,
    tables: [],
    orderItems: [],
    allOrderItems: [],
    items: [],
  });

  const [cookies] = useCookies(['user']);
  const [currentTable, setCurrentTable] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    if (!cookies.user || cookies.user !== props.restoId) {
      navigate(`/admin`);
    }
  }, []);

  useEffect(() => {
    axios.get(`/api/orders/${props.restoId}`)
      .then((response) => {
        const sortedTables = response.data.sort((current, next) => {
          return current.id - next.id;
        });
        setState((currentState) => {
          return ({
            ...currentState,
            tables: sortedTables
          })
        })
      })
      .catch(() => {
        setState((currentState) => {
          return ({
            ...currentState,
            tables: []
          })
        })
      })
  }, [currentTable]);

  useEffect(() => {
    axios.get(`/api/getAllOrderItems/${props.restoId}`)
      .then((response) => {
        setState((currentState) => {
          return ({
            ...currentState,
            items: response.data
          });
        });
      })
      .catch(() => {
        setState((currentState) => {
          return ({
            ...currentState,
            items: []
          })
        })
      })
  }, [currentTable]);

  const renderTablePage = function() {
    const activeTable = state.tables.find(table => table.id === currentTable);
    let activeItems = [];
    if (activeTable) {
      activeItems = state.items.filter(item => item.order_id === activeTable.order_id);
    }
    return (
      <div className="d-flex flex-column justify-content-between">
        <Tables currentTable={currentTable} setCurrentTable={setCurrentTable} tables={state.tables} classes={classes}/>
        <br/>
        {currentTable && <TableOrder currentTable={currentTable} items={activeItems} classes={classes}/>}
        <br/>
      </div>
    )
  };

  return (
    <Fragment>
      <TopBar title="All Orders" admin/>
      <br/>
      <br/>
      <br/>
      <div className="text-center">
        <Button onClick={() => setState(current => ({...current, show: TABLES}))}>Tables</Button> | <Button onClick={() => setState(current => ({...current, show: EDIT}))}>Edit Menu</Button>
      </div>
      <div className="text-center">
        {state.show === TABLES && renderTablePage()}
        {state.show === EDIT && <MenuEdit restaurantId={props.restoId}/>}
      </div>
    </Fragment>
  )
}