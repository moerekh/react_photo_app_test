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

// Custom CSS
import './photo_proto.scss';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></Link>
        </li>
        <li>
          <Link to="/camera"><span class="glyphicon glyphicon-camera" aria-hidden="true"></span></Link>
        </li>
      </ul>

      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route exact path="/camera">
          <CameraComponent></CameraComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
