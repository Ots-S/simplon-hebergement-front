import { useState, useEffect } from 'react';
import { fetchProjects, deleteProject, updateProject } from '../../../api/api';
import { Grid, Dialog, CircularProgress } from '@material-ui/core';
import ProjectForm from '../projectForm/ProjectForm';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from '@material-ui/core';
import './ProjectTable.css';

import FiltersButtonsContainer from '../FiltersButtonsContainer';
import DeleteDialog from '../deleteDialog/DeleteDialog';
import ProjectTemplate from '../projectTemplate/ProjectTemplate';

export default function ProjectTable() {
  const fields = [
    { id: 'id', label: 'id', width: '5%' },
    { id: 'client', label: 'client', width: '12.5%' },
    { id: 'project', label: 'projet', width: '12.5%' },
    { id: 'domain', label: 'domaine', width: '12.5%' },
    { id: 'rate', label: 'tarif', width: '5%' },
    { id: 'startingDate', label: 'date début', width: '12.5%' },
    { id: 'endingDate', label: 'date fin', width: '12.5%' },
  ];
  const buttons = [
    { id: 'edit', label: 'éditer', width: '5%' },
    { id: 'delete', label: 'supprimer', width: '5%' },
  ];
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [sortedProjects, setSortedProjects] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [projectToModify, setProjectToModify] = useState({});
  const [projectToDelete, setProjectToDelete] = useState({});

  function formatDate(date) {
    return date.split('-').reverse().join('-');
  }

  useEffect(() => {
    fetchProjects()
      .then(items => {
        setProjects(items);
        setSortedProjects(items);
      })
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    const results = projects.filter(
      element =>
        element.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatDate(element.startingDate)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        formatDate(element.endingDate)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        element.rate.toString().includes(searchTerm)
    );
    setSortedProjects(results);
  }, [searchTerm]);

  if (sortConfig !== null) {
    sortedProjects.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    function handleAddDialog() {
      setOpenAddDialog(prev => !prev);
    }

    function handleUpdateDialog(project) {
      setProjectToModify(project);
      setOpenUpdateDialog(prev => !prev);
    }

    function handleConfirmationDialog(project) {
      if (project) {
        setProjectToDelete(project);
      }
      setOpenConfirmationDialog(prev => !prev);
    }

    function getProjects() {
      fetchProjects()
        .then(projects => {
          setProjects(projects);
          setSortedProjects(projects);
        })
        .then(() => setLoading(false));
    }

    function removeProject(project) {
      deleteProject(project.id).then(() => getProjects());
      handleConfirmationDialog();
    }

    function modifyProject(project) {
      updateProject(project).then(getProjects);
      setProjectToModify(project);
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

    return (
      <div className="table">
        <Box mt={4} mb={2}>
          <FiltersButtonsContainer
            handleChange={handleChange}
            searchTerm={searchTerm}
            handleAddProjectDialog={handleAddDialog}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead className="tablehead">
              <TableRow>
                {fields.map(field => (
                  <TableCell key={field.id} align="center" width={field.width}>
                    <TableSortLabel
                      className="cell"
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
                  <TableCell
                    key={button.id}
                    align="center"
                    width="5%"
                    className="cell"
                  >
                    {button.label.toUpperCase()}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedProjects.map(project => (
                <ProjectTemplate
                  project={project}
                  key={project.id}
                  openFormModal={handleUpdateDialog}
                  handleConfirmDialog={handleConfirmationDialog}
                />
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
        <Dialog open={openUpdateDialog} fullWidth maxWidth="md">
          <ProjectForm
            projectToModify={projectToModify}
            modifyProject={modifyProject}
            handleDialog={handleUpdateDialog}
            titleForm={'MODIFIER LE PROJET'}
            getProjects={getProjects}
          />
        </Dialog>
        <Dialog
          open={openAddDialog}
          fullWidth
          maxWidth="md"
          className="add-project-dialog"
        >
          <ProjectForm
            handleDialog={handleAddDialog}
            getProjects={getProjects}
          />
        </Dialog>
        <Dialog open={openConfirmationDialog} fullWidth maxWidth="sm">
          <DeleteDialog
            project={projectToDelete}
            handleDialog={handleConfirmationDialog}
            removeProject={removeProject}
          />
        </Dialog>
      </div>
    );
  }
}
