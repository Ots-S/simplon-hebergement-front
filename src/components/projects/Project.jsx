import React from 'react';
import { Container, Grid, Typography, Button, Paper } from '@material-ui/core';

export default function Project({ project, removeProject, modifyProject }) {
  return (
    <Container>
      <Paper>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={1}>
            <Typography>{project.id}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{project.client}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{project.project}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{project.domain}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{project.rate}€</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{project.startingDate}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{project.endingDate}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeProject(project.id)}
            >
              X
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => modifyProject(project)}
            >
              MODIFIER
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
