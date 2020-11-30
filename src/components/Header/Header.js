import React, { Component } from "react";
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header>
        <div id="navbar" className="sticky" style={{ zIndex: "1000" }}>
          <a className="active" >
            Gemüse
          </a>
          <a>Obst</a>
          <a>Schokolade</a>
        </div>
      </header>
    );
  }
}

export default Header;
