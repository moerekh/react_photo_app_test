import React from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Other pages or components
import CameraComponent from './components/CameraComponent';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';

// Custom CSS
import './photo_proto.scss';

function App() {
  return (
    <Router>
      
      <NavbarComponent>
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/camera" className="nav-link">Camera</Link></li>
      </NavbarComponent>

      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route exact path="/camera" component={CameraComponent}></Route>
      </Switch>
    </Router>
  );
}

export default App;
