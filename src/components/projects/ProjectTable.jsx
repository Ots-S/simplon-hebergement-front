import { useState, useEffect } from 'react';
import './ProjectTable.css';
import { fetchProjects, deleteProject, updateProject } from '../../api/api';
import { Grid, Dialog, CircularProgress, TextField } from '@material-ui/core';
import ProjectForm from './projectForm/ProjectForm';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Hidden,
  Typography,
} from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import FiltersButtonsContainer from './FiltersButtonsContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'yellow',

    // if you want to have icons visible permanently
    // '& $icon': {
    //   opacity: 1,
    //   color: primaryMain
    // },

    '&:hover': {
      color: 'yellow',
      opacity: 1,

      '&& $icon': {
        opacity: 1,
        color: 'yellow',
      },
    },
    '&$active': {
      opacity: 1,
      color: 'yellow',

      // && instead of & is a workaround for https://github.com/cssinjs/jss/issues/1045
      '&& $icon': {
        opacity: 1,
        color: 'yellow',
      },
    },
  },
});

export default function ProjectTable() {
  const classes = useStyles();
  const fields = [
    { id: 'id', label: 'id' },
    { id: 'client', label: 'client' },
    { id: 'project', label: 'projet' },
    { id: 'domain', label: 'domaine' },
    { id: 'rate', label: 'tarif / mois' },
    { id: 'startingDate', label: 'date début' },
    { id: 'endingDate', label: 'date fin' },
  ];
  const buttons = [
    { id: 'edit', label: 'éditer' },
    { id: 'delete', label: 'supprimer' },
  ];
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [open, setOpen] = useState(false);
  const [projectToModify, setProjectToModify] = useState('');
  const [projectToDelete, setProjectToDelete] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [addProjectDialog, setAddProjectDialog] = useState(false);

  useEffect(() => {
    fetchProjects()
      .then(items => {
        setProjects(items);
        setSortedArray(items);
      })
      .then(() => setLoading(false));
  }, []);

  function handleDialog() {
    setOpen(prev => !prev);
  }

  function handleConfirmDialog(project) {
    if (project) {
      setProjectToDelete(project);
    }
    setConfirmDialog(prev => !prev);
  }

  function handleAddProjectDialog() {
    setAddProjectDialog(prev => !prev);
  }

  function getProjects() {
    fetchProjects()
      .then(items => setSortedArray(items))
      .then(() => setLoading(false));
  }

  function removeProject(project) {
    deleteProject(project.id).then(() => getProjects());
    handleConfirmDialog();
  }

  function modifyProject(project) {
    console.log('open :', open);
    updateProject(project).then(getProjects);
    setProjectToModify(project);
    handleDialog();
  }

  function sortParam(key) {
    let direction = 'asc';
    setSortConfig({ key, direction });
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = projects.filter(
      element =>
        element.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.startingDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.endingDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.rate == searchTerm
    );
    setSortedArray(results);
  }, [searchTerm]);

  if (sortConfig !== null) {
    sortedArray.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return (
      <div className="table">
        <Box mt={4} mb={2}>
          <FiltersButtonsContainer
            handleChange={handleChange}
            searchTerm={searchTerm}
            handleAddProjectDialog={handleAddProjectDialog}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <Hidden>
              <TableHead className="tablehead">
                <TableRow>
                  {fields.map(field => (
                    <TableCell key={field.id} align="center">
                      <TableSortLabel
                        className={classes.root}
                        align="center"
                        direction={sortConfig.direction}
                        active={sortConfig.key === field.id}
                        onClick={() => sortParam(field.id)}
                      >
                        {field.label.toUpperCase()}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                  {buttons.map(button => (
                    <TableCell key={button.id} align="center" className="cell">
                      {button.label.toUpperCase()}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
            </Hidden>
            <TableBody>
              {sortedArray.map(project => (
                <TableRow key={project.id}>
                  <TableCell component="th" scope="row">
                    {project.id}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {project.client}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {project.project}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {project.domain}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {project.rate} €
                  </TableCell>
                  <TableCell component="th" align="center">
                    {project.startingDate}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {project.endingDate}
                  </TableCell>
                  <TableCell component="th" align="center">
                    <Button
                      onClick={() => modifyProject(project)}
                      className="icon-button"
                    >
                      <EditOutlinedIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handleConfirmDialog(project)}
                      className="icon-button"
                    >
                      <DeleteOutlineOutlinedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {loading && (
          <Grid
            container
            justify="center"
            alignItems="center"
            className="loading-container"
          >
            <CircularProgress color="secondary" size={50} />
          </Grid>
        )}
        <Dialog open={open} fullWidth>
          <ProjectForm
            projectToModify={projectToModify}
            modifyProject={modifyProject}
            handleDialog={handleDialog}
            titleForm={'MODIFIER LE PROJET'}
          />
        </Dialog>
        <Dialog
          open={confirmDialog}
          handleDialog={handleConfirmDialog}
          fullWidth
        >
          <Typography align="center">
            Êtes-vous sûr de vouloir supprimer ce projet ?
          </Typography>
          <Typography align="center">
            {projectToDelete.client} - {projectToDelete.project}
          </Typography>
          <Box my={2}>
            <Grid container justify="space-around">
              <Button
                onClick={handleConfirmDialog}
                variant="outlined"
                color="secondary"
              >
                non
              </Button>
              <Button
                onClick={() => removeProject(projectToDelete)}
                variant="contained"
                color="secondary"
              >
                oui
              </Button>
            </Grid>
          </Box>
        </Dialog>
        <Dialog
          open={addProjectDialog}
          handleDialog={handleAddProjectDialog}
          fullWidth
          className="add-project-dialog"
          maxWidth="md"
        >
          <ProjectForm handleDialog={handleAddProjectDialog} />
        </Dialog>
      </div>
    );
  }
}
