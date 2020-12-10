import React, { useState } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Home.css';

import ProjectTable from '../../components/projects/ProjectTable';

export default function Home() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="home-container"
      >
        <Box mb={5}>
          <Grid item>
            <Link to="/projectform">
              <Button variant="contained" color="secondary">
                ajouter un projet
              </Button>
            </Link>
          </Grid>
        </Box>
        <ProjectTable />
      </Grid>
    </Container>
  );
}
