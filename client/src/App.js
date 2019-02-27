import React, { Component } from 'react';
import './assets/sass/app.sass';

class App extends Component {
  render() {
    return (
      <div className="[ container ] [ is-fluid ] [ is-marginless ]">
        <nav className="[ navbar ] [ background-stripes ]" role="navigation" aria-label="main navigation">
          <div className="[ navbar-brand ]">
            <a className="[ navbar-item ] [ has-text-centered ]" href="/">SPARK NETWORKS</a>
            <a role="button" className="[ navbar-burger ]" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
