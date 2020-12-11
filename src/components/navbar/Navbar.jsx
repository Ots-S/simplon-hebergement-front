import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: '100px',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title}>SIMPLON.PROD</Typography>
        {/* <Link to="/projectform" className="link">
          <Button color="inherit">AJOUTER UN PROJET</Button>
        </Link>
        <Link to="/">
          <Button color="inherit" className="link">
            SE DECONNECTER
          </Button>
        </Link> */}
      </Toolbar>
    </AppBar>
  );
}
