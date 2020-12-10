import Login from './components/login/Login';
import Home from './components/home/Home';
import ProjectForm from './components/projects/projectForm/ProjectForm';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projectform">
          <ProjectForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
