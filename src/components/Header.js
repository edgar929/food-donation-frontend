import React, { useEffect, useState } from 'react';
  import { makeStyles } from '@mui/styles';
import { AppBar,IconButton, Toolbar, Collapse, Box } from '@mui/material';
import {Sort} from '@mui/icons-material'
import { ExpandMore } from '@mui/icons-material';
import { Link as Scroll } from 'react-scroll';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito'
  },
  appbar: {
    background: 'none',
    backgroundColor: 'darkgreen !important'
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  auth:{
    color: 'white',
    textDecoration: 'none',
    marginLeft: '6px',
    fontWeight: 'bold'
  },
 authHover:{
   color: 'green'
 }
 
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Save<span className={classes.colorText}>Life.</span>
          </h1>
          
         <Box>
         <Link to="/login" className={classes.auth}>LOGIN</Link> 
          <Link to="/register" className={classes.auth}>SIGNUP</Link> 
         </Box>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Save<span className={classes.colorText}>Life.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMore className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
