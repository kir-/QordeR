import React, { Fragment } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import TopBar from './TopBar';

export default function Admin() {
  return (
    <Fragment>
      <TopBar title="Admin Login for #restaurantName#"/>
      <br/>
      <br/>
      <br/>
      <div class='text-center'>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
      <div class='text-center'>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
    </Fragment>
  )
}