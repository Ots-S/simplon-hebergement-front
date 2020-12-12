import './ProjectTemplate.css';
import { useEffect, useState } from 'react';
import { Button, TableCell, TableRow, Grid } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AlarmIcon from '@material-ui/icons/Alarm';

export default function ProjectTemplate({
  project,
  openFormModal,
  handleConfirmDialog,
}) {
  const [dateAlert, setDateAlert] = useState(false);

  useEffect(() => {
    compareDate(getTodayDate(), getOneMonthBeforeDate(project.endingDate))
      ? setDateAlert(true)
      : setDateAlert(false);
  }, [project]);

  function getOneMonthBeforeDate(date) {
    const endingDate = new Date(date);
    let month = endingDate.getMonth();
    let year = endingDate.getFullYear();
    if (month === 0) {
      month = 12;
      year = year - 1;
    } else {
      month = month;
    }
    return `${month}-${endingDate.getDate()}-${year}`;
  }

  function compareDate(date1, date2) {
    return new Date(date1) >= new Date(date2);
  }

  function getTodayDate() {
    const todayDate = new Date();
    return `${todayDate.getDate()}-${
      todayDate.getMonth() + 1
    }-${todayDate.getFullYear()}`;
  }

  function formatDate(date) {
    return date.split('-').reverse().join('-');
  }

  return (
    <TableRow className={dateAlert ? 'table-row' : ''}>
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
        {formatDate(project.startingDate)}
      </TableCell>
      <TableCell component="th" align="center">
        <Grid container justify="space-around" alignItems="center">
          {dateAlert ? <AlarmIcon color="secondary" /> : ''}
          {formatDate(project.endingDate)}
        </Grid>
      </TableCell>
      <TableCell component="th" align="center">
        <Button onClick={() => openFormModal(project)} className="icon-button">
          <EditOutlinedIcon />
        </Button>
      </TableCell>{' '}
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
