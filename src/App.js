import Login from './components/login/Login';
import Home from './components/home/Home';
import ProjectForm from './components/projects/projectForm/ProjectForm';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  let location = useLocation();
  return (
    <div>
      {console.log(location.pathname)}
      {location.pathname !== '/' && <Navbar />}
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
    </div>
  );
}

export default App;
