import './DeleteDialog.css';
import { Typography, Box, Grid, Button } from '@material-ui/core';

export default function DeleteDialog({ project, handleDialog, removeProject }) {
  return (
    <div>
      <Box my={2}>
        <Typography align="center">
          Êtes-vous sûr de vouloir supprimer ce projet ?
        </Typography>
      </Box>
      <Typography align="center">
        {project.client} - {project.project}
      </Typography>
      <Box my={2}>
        <Grid container justify="space-around">
          <Button
            onClick={handleDialog}
            variant="outlined"
            color="secondary"
            className="dialog-button"
          >
            annuler
          </Button>
          <Button
            onClick={() => removeProject(project)}
            variant="contained"
            color="secondary"
            className="dialog-button"
          >
            oui
          </Button>
        </Grid>
      </Box>
    </div>
  );
}
