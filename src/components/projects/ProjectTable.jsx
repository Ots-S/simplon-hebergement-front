import { useState, useEffect } from 'react';
import { fetchProjects } from '../../api/api';
import { deleteProject } from '../../api/api';
import { updateProject } from '../../api/api';
import { Container, Grid, Dialog } from '@material-ui/core';
import ProjectForm from './projectForm/ProjectForm';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import './ProjectTable.css';

export default function ProjectTable() {
  const fields = [
    { id: 'id', label: 'ID' },
    { id: 'client', label: 'Client' },
    { id: 'project', label: 'Projet' },
    { id: 'domain', label: 'Domaine' },
    { id: 'rate', label: 'Tarif' },
    { id: 'startingDate', label: 'Date début' },
    { id: 'endingDate', label: 'Date fin' },
  ];
  const buttons = [
    { id: 'edit', label: 'Editer' },
    { id: 'delete', label: 'Supprimer' },
  ];
  const [sortedArray, setSortedArray] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [open, setOpen] = useState(false);
  const [projectToModify, setProjectToModify] = useState();

  function handleDialog() {
    setOpen(prev => !prev);
  }

  useEffect(() => {
    getProjects();
  }, []);

  function getProjects() {
    fetchProjects().then(items => setSortedArray(items));
  }

  function removeProject(id) {
    deleteProject(id).then(() => getProjects());
  }

  function modifyProject(project) {
    console.log('dans modify project');
    updateProject(project).then(getProjects);
    setProjectToModify(project);
    handleDialog();
  }

  if (sortedField !== null) {
    sortedArray.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead className="tablehead">
            <TableRow>
              {fields.map(field => (
                <TableCell key={field.id} align="center">
                  <TableSortLabel
                    className="cell"
                    align="center"
                    active={sortedField === field.id}
                    direction="asc"
                    onClick={() => setSortedField(field.id)}
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
          <TableBody>
            {sortedArray.map(project => (
              <TableRow key={project.id}>
                <TableCell component="th" scope="row">
                  {project.id}
                </TableCell>
                <TableCell align="center">{project.client}</TableCell>
                <TableCell align="center">{project.project}</TableCell>
                <TableCell align="center">{project.domain}</TableCell>
                <TableCell align="center">{project.rate}</TableCell>
                <TableCell align="center">{project.startingDate}</TableCell>
                <TableCell align="center">{project.endingDate}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => modifyProject(project)}>
                    <EditOutlinedIcon />
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => removeProject(project.id)}>
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} handleDialog={handleDialog} fullWidth>
        <ProjectForm
          projectToModify={projectToModify}
          modifyProject={modifyProject}
          handleDialog={handleDialog}
        />
      </Dialog>
    </div>
  );
}
