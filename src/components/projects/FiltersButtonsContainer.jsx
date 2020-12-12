import { Grid } from '@material-ui/core';
import MobileFilterButton from './mobileFilterButton/MobileFilterButton';
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
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

export default function FiltersButtonsContainer({
  searchTerm,
  handleChange,
  handleAddProjectDialog,
}) {
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      justify="space-between"
      className="buttons-container"
    >
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddIcon />}
          onClick={handleAddProjectDialog}
        >
          <Hidden mdDown>Ajouter un projet</Hidden>
        </Button>
      </Grid>
      <Grid item xs={6} lg={6}>
        <TextField
          variant="outlined"
          type="text"
          placeholder="Rechercher"
          size="small"
          color="secondary"
          fullWidth
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Grid>
      <Hidden mdUp>
        <Grid item>
          <MobileFilterButton />
        </Grid>
      </Hidden>
    </Grid>
  );
}
