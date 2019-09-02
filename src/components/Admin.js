import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, TextField, Button } from '@material-ui/core';
import { navigate } from 'hookrouter';
import TopBar from './TopBar';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Admin() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validate() {
    if (!email) {
      setError("Please enter your email!")
      return
    }
    if (!password) {
      setError("Please enter your password!")
      return;
    }
    login(email, password)
  }

  function login(email, password) {
    return (
      axios.post(`/login`, { email, password })
        .then((response) => {
          navigate('/restaurant')
        })
        .catch((error) => {
          setError("Incorrect email or password")
        })
    )
  }

  return (
    <Fragment>
      <TopBar title="Restaurant Login"/>
      <br/>
      <br/>
      <br/>
      <div className="row">
        <div className="col text-center">
          <form onSubmit={(event) => event.preventDefault()}>
            <TextField
              label="Email"
              className={classes.textField}
              error={error}
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              margin="normal"
            />
          <br/>
            <TextField
              label="Password"
              className={classes.textField}
              error={error}
              type="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              margin="normal"
            />
          <p>{error}</p>
          <br/>
          <Button type="submit" onClick={validate} variant="outlined" color="primary" className={classes.button}>
            Log In
          </Button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}