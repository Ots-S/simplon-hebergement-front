import './ProjectForm.css';
import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from '@material-ui/core';
import { saveProject } from '../../../api/api';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from 'date-fns/locale/fr';
import EventIcon from '@material-ui/icons/Event';

export default function ProjectForm({
  projectToModify,
  handleDialog,
  modifyProject,
  titleForm,
  getProjects,
}) {
  const [id, setId] = useState('');
  const [client, setClient] = useState('');
  const [project, setProject] = useState('');
  const [domain, setDomain] = useState('');
  const [rate, setRate] = useState(0);
  const [startingDate, setStartingDate] = useState(null);
  const [endingDate, setEndingDate] = useState(null);

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
    const newProject = {
      id: id,
      client: client,
      project: project,
      domain: domain,
      rate: rate,
      startingDate: startingDate,
      endingDate: endingDate,
    };
    return newProject;
  }

  function save() {
    const project = createProject();
    projectToModify
      ? modifyProject(project)
      : saveProject(project).then(getProjects);
    handleDialog();
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
          <Grid item>
            <Typography
              variant="h6"
              align="center"
              color="secondary"
              className="title"
            >
              {titleForm ? titleForm : 'AJOUTER UN PROJET'}
            </Typography>
          </Grid>
          <TextField
            type="text"
            label="Client"
            required
            fullWidth
            margin="normal"
            value={client}
            onChange={e => setClient(e.target.value)}
            color="secondary"
          />
          <TextField
            type="text"
            label="Projet"
            required
            fullWidth
            margin="normal"
            value={project}
            onChange={e => setProject(e.target.value)}
            color="secondary"
          />
          <TextField
            type="text"
            label="Domaine"
            fullWidth
            margin="normal"
            required
            value={domain}
            onChange={e => setDomain(e.target.value)}
            color="secondary"
          />
          <TextField
            type="number"
            label="Tarif"
            fullWidth
            margin="normal"
            required
            value={rate}
            onChange={e => setRate(e.target.value)}
            color="secondary"
          />
          <Grid container direction="row" justify="space-around" spacing={1}>
            <Grid item xs={6} lg={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                <DatePicker
                  fullWidth
                  value={startingDate}
                  onChange={date => setStartingDate(date)}
                  format="dd/MM/yyyy"
                  label="jj/mm/aaaa"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EventIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid container item xs={6} lg={6} justify="space-between">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  color="secondary"
                  fullWidth
                  value={endingDate}
                  onChange={date => setEndingDate(date)}
                  format="dd/MM/yyyy"
                  label="jj/mm/aaaa"
                  minDate={startingDate}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EventIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container justify="space-around" alignItems="center">
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleDialog}
              className="submit-button"
              size="large"
            >
              annuler
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={save}
              className="submit-button"
              size="large"
              disabled={
                !client ||
                !project ||
                !domain ||
                !rate ||
                !startingDate ||
                !endingDate
              }
            >
              valider
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
