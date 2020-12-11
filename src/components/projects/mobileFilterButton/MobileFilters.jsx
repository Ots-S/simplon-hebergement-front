import { Grid, Typography, Paper } from '@material-ui/core';
import './MobileFilters.css';

export default function MobileFilters() {
  return (
    <Grid container direction="column">
      <Grid className="filter">
        <Typography>Filtrer par client</Typography>
      </Grid>
      <Grid className="filter">
        <Typography>Filtrer par projet</Typography>
      </Grid>
      <Grid className="filter">
        <Typography>Filtrer par domaine</Typography>
      </Grid>
      <Grid className="filter">
        <Typography>Filtrer par tarif</Typography>
      </Grid>
      <Grid className="filter">
        <Typography>Filtrer par date de début</Typography>
      </Grid>
      <Grid className="filter">
        <Typography>Filtrer par date de fin</Typography>
      </Grid>
    </Grid>
  );
}
