import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import './ProjectForm.css';
import { useHistory } from 'react-router-dom';
import { saveProject } from '../../../api/api';

export default function ProjectForm({
  projectToModify,
  handleDialog,
  modifyProject,
}) {
  const [id, setId] = useState();
  const [client, setClient] = useState('');
  const [project, setProject] = useState('');
  const [domain, setDomain] = useState('');
  const [rate, setRate] = useState(0);
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (projectToModify) {
      setId(projectToModify.id);
      setClient(projectToModify.client);
      setProject(projectToModify.project);
      setDomain(projectToModify.domain);
      setRate(projectToModify.rate);
      setStartingDate(projectToModify.startingDate);
      setEndingDate(projectToModify.endingDate);
    }
  }, []);

  function createProject() {
    const projectObj = {
      id: id,
      client: client,
      project: project,
      domain: domain,
      rate: rate,
      startingDate: startingDate,
      endingDate: endingDate,
    };
    return projectObj;
  }

  function save() {
    const project = createProject();
    projectToModify ? modifyProject(project) : saveProject(project);
    history.push('/home');
  }

  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="projectform-container"
      >
        <Typography align="center">AJOUTER UN PROJET</Typography>
        <Grid
          container
          item
          xs={12}
          lg={8}
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <TextField
            type="text"
            label="Client"
            required
            fullWidth
            margin="normal"
            value={client}
            onChange={e => setClient(e.target.value)}
          />
          <TextField
            type="text"
            label="Projet"
            required
            fullWidth
            margin="normal"
            value={project}
            onChange={e => setProject(e.target.value)}
          />
          <TextField
            type="text"
            label="Domaine"
            fullWidth
            margin="normal"
            required
            value={domain}
            onChange={e => setDomain(e.target.value)}
          />
          <TextField
            type="text"
            label="Tarif"
            fullWidth
            margin="normal"
            required
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
          <Grid container direction="row" justify="space-around" spacing={1}>
            <Grid item xs={6}>
              <TextField
                type="date"
                label="Date début d'hébergement"
                fullWidth
                margin="normal"
                variant="filled"
                required
                value={startingDate}
                onChange={e => setStartingDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="date"
                label="Date fin d'hébergement"
                fullWidth
                margin="normal"
                variant="filled"
                required
                value={endingDate}
                onChange={e => setEndingDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={save}
            className="submit-button"
          >
            VALIDER
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
