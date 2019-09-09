import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core';
import { navigate } from 'hookrouter';
import { useCookies } from 'react-cookie';
import TopBar from 'components/TopBar';
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
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [loginError, setLoginError] = useState();

  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    if (cookies.user) {
      navigate(`/admin/${cookies.user}`);
    }
  }, [cookies.user])

  function validate() {
    if (!email) {
      setEmailError("Please enter your email!")
      return;
    }
    if (!password) {
      setPasswordError("Please enter your password!")
      return;
    }
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    login(email, password)
      .then((response) => {
        setLoginError("Incorrect username or password!")
        console.log(response.data.restaurantId);
        if (response.data !== "error") {
          setCookie('user', response.data.restaurantId);
        } else {
          navigate(`/admin`);
        }
      })
  }

  function login(email, password) {
    return (
      axios.post('/login', { email, password })
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
              error={!!emailError || !!loginError}
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              margin="normal"
            />
            <p>{emailError}</p>
            <TextField
              label="Password"
              className={classes.textField}
              error={!!passwordError || !!loginError}
              type="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              margin="normal"
            />
          <p>{passwordError}</p>
          <p>{loginError}</p>
          <Button type="submit" onClick={() => validate()} variant="outlined" color="primary" className={classes.button}>
            Log In
          </Button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}