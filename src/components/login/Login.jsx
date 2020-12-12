import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import logo from '../../assets/simplonlogo.png';
import './Login.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="login-container"
    >
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <img src={logo} alt="logo simplon" className="logo" />
        </Grid>
        <Grid
          container
          item
          xs={11}
          sm={8}
          md={6}
          lg={3}
          direction="column"
          justify="center"
          spacing={4}
        >
          <Grid item>
            <TextField
              id="username"
              label="Identifiant"
              type="text"
              required
              fullWidth
              variant="outlined"
              placeholder="identifiant"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="secondary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              label="Mot de passe"
              type={showPassword ? 'text' : 'password'}
              required
              fullWidth
              variant="outlined"
              autoComplete="on"
              placeholder="Mot de passe"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="secondary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(prev => !prev)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container item justify="center">
            <Link to="/home" className="link">
              <Button variant="contained" color="secondary" size="large">
                se connecter
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
