import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { navigate } from 'hookrouter';
import axios from 'axios';
import { useCookies } from 'react-cookie';
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

  const [cookies, setCookie, removeCookie] = useCookies('user');

  function logout() {
    axios.post('/logout')
      .then((response) => {
        removeCookie('user');
        navigate(response.data)
      })
  }

  return (
    <div className={classes.root}>
      <AppBar position={classes.static}>
        <Toolbar>
          <div style={{border:"4px", width:"10%"}}>
            <img 
            src="https://files.slack.com/files-pri/T2G8TE2E5-FN85GEW6T/kakaotalk_photo_2019-09-09-16-25-53.png"
            style={{display:"block", border:"4px", width:"40px"}}
            />
          </div>
          <Typography style={{marginLeft:"2%"}} variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          {props.admin && <Button onClick={logout} color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
