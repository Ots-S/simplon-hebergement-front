import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing: '3px',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          SIMPLON.PROD
        </Typography>
        <Link to="/">
          <Button color="inherit" className="exit-logo">
            <ExitToAppIcon />
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
