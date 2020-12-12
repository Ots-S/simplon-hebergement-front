import { Typography, Box, Grid, Button } from '@material-ui/core';

export default function DeleteDialog({ project, handleDialog, removeProject }) {
  return (
    <div>
      <Typography align="center">
        Êtes-vous sûr de vouloir supprimer ce projet ?
      </Typography>
      <Typography align="center">
        {project.client} - {project.project}
      </Typography>
      <Box my={2}>
        <Grid container justify="space-around">
          <Button onClick={handleDialog} variant="outlined" color="secondary">
            annuler
          </Button>
          <Button
            onClick={() => removeProject(project)}
            variant="contained"
            color="secondary"
          >
            oui
          </Button>
        </Grid>
      </Box>
    </div>
  );
}
