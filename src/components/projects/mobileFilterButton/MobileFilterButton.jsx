import { useState } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Grid, Dialog, Button } from '@material-ui/core';
import MobileFilters from './MobileFilters';

export default function MobileFilterButton() {
  const [open, setOpen] = useState(false);

  function handleChange() {
    setOpen(prev => !prev);
  }

  return (
    <Grid container justify="flex-end">
      <Button color="secondary" onClick={handleChange}>
        <FilterListIcon color="secondary" />
      </Button>
      <Dialog open={open} handleChange={handleChange} fullWidth>
        <MobileFilters />
      </Dialog>
    </Grid>
  );
}
