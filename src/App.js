import Login from './components/login/Login';
import Home from './components/home/Home';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  let location = useLocation();
  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
