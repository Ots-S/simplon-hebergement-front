import React, { useEffect, useState } from 'react';
import { Container, Grid, Dialog } from '@material-ui/core';
import './Home.css';
import { fetchProjects } from '../../api/api';

import ProjectForm from '../../components/projects/projectForm/ProjectForm';
import ProjectTable from '../../components/projects/ProjectTable';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [projectToModify, setProjectToModify] = useState();

  function handleModal() {
    setOpen(prev => !prev);
  }

  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="home-container"
      >
        {/* <Box mb={5}>
          <Grid item>
            <Link to="/projectform">
              <Button variant="contained" color="primary">
                Ajouter un projet
              </Button>
            </Link>
          </Grid>
        </Box> */}
        <ProjectTable />
      </Grid>
    </Container>
  );
}
