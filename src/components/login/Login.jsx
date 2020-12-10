import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import logo from '../../assets/simplonlogo.png';
import './Login.css';

export default function Login() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="login-container"
      >
        <img src={logo} alt="logo simplon" className="logo" />
        <form>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <TextField
                id="username"
                label="Identifiant"
                type="text"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="password"
                label="Mot de passe"
                type="password"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Link to="/home">
                <Button variant="contained" color="primary">
                  SE CONNECTER
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
