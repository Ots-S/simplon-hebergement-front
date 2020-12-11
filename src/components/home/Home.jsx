import { Container, Grid } from '@material-ui/core';
import './Home.css';
import ProjectTable from '../../components/projects/ProjectTable';

export default function Home() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="flex-start"
        className="home-container"
      >
        <ProjectTable />
      </Grid>
    </Container>
  );
}
