import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Grid,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import logo from '../../assets/simplonlogo.png';
import './Login.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

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
            spacing={6}
          >
            <Grid item>
              <TextField
                id="username"
                label="Identifiant"
                type="text"
                required
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
                type="password"
                required
                variant="outlined"
                autoComplete="on"
                placeholder="Mot de passe"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <Link to="/home">
                <Button variant="contained" color="secondary" size="large">
                  se connecter
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
