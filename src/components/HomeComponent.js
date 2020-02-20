import React from 'react';
import logo from '../logo.svg';
import '../App.css';


export default class HomeComponent extends React.Component {
    render() {
      return(
        <main>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1>Home Page</h1>
              </div>
            </div>
          </div>
        </main>
      )
    }
  }