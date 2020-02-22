import React from 'react';

export default class NavbarComponent extends React.Component {
  render() {
    return(
      <nav id="main_navigation" className="navbar navbar-expand fixed-bottom navbar-dark bg-dark">
        <div id="navbarNav">
          <ul className="navbar-nav">
            {this.props.children}
          </ul>
        </div>
      </nav>
    )
  }
}