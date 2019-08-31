import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { TextField, FormControl, Button } from '@material-ui/core';
import TopBar from './TopBar';

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
  return (
    <Fragment>
      <TopBar title="Admin Login for #restaurantName#"/>
      <br/>
      <br/>
      <br/>
      <div class="row">
        <div class="col offset-2">
          <FormControl>
            <TextField
              id="standard-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              autoComplete="current-email"
              margin="normal"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <Button type="submit" variant="outlined" color="primary" className={classes.button}>
              Log In
            </Button>
          </FormControl>
        </div>
      </div>
    </Fragment>
  )
}