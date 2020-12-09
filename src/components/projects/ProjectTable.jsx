import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import './ProjectTable.css';

export default function ProjectTable({
  projects,
  removeProject,
  modifyProject,
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow>
            <TableCell className="cell">ID</TableCell>
            <TableCell align="center" className="cell">
              Client
            </TableCell>
            <TableCell align="center" className="cell">
              Projet
            </TableCell>
            <TableCell align="center" className="cell">
              Domaine
            </TableCell>
            <TableCell align="center" className="cell">
              Tarif
            </TableCell>
            <TableCell align="center" className="cell">
              Date début
            </TableCell>
            <TableCell align="center" className="cell">
              Date fin
            </TableCell>
            <TableCell align="center" className="cell">
              Supprimer
            </TableCell>
            <TableCell align="center" className="cell">
              Éditer
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map(project => (
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
                <Button onClick={() => removeProject(project.id)}>
                  <DeleteOutlineOutlinedIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button onClick={() => modifyProject(project)}>
                  <EditOutlinedIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
