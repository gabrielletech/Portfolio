import React, { Component } from 'react';
import { Nav } from './Nav';
import { Header } from './Header';

export class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Nav />
          <Header /><br />
        </div>

        <div className="headline">
          <h1>Fadziso Gabrielle Ndoro</h1>
          <h2>Junior Full Stack Web Developer</h2>
        </div>
      </>
    );
  }
}

export default Home;
