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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/camera">Camera</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
        </nav>

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
    </div>
  </Router>
  );
}

export default App;
