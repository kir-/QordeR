import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/*props
* title: STRING
* admin: BOOLEAN
*/

export default function TopBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position={classes.static}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          {props.admin && <Button color="inherit">Admin</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
// <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
// <MenuIcon />
// </IconButton>