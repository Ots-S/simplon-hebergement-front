import './ProjectTemplate.css';
import { Button, TableCell, TableRow } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

export default function ProjectTemplate({
  project,
  openFormModal,
  handleConfirmDialog,
}) {
  const endingDate = project.endingDate;

  return (
    <TableRow className="table-row">
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
        <Button onClick={() => openFormModal(project)} className="icon-button">
          <EditOutlinedIcon />
        </Button>
      </TableCell>
      <TableCell component="th" align="center">
        <Button
          onClick={() => handleConfirmDialog(project)}
          className="icon-button"
        >
          <DeleteOutlineOutlinedIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}
