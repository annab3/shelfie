import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <p>SHELFIE</p>
        <Link to="/">
          <button>DashBoard</button>
        </Link>
        <Link to="/form">
          <button>Add Inventory</button>
        </Link>
      </header>
    );
  }
}

export default Header;
