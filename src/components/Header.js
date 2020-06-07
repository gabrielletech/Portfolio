import React, { Component } from 'react';
import image from './images/future.jpg';

export class Header extends Component {
  render() {
    return (
      <div>
        <img src={image} alt="header" style={{ width: 1400}}/>
      </div>
    );
  }
}

export default Header;
