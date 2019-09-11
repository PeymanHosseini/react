import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand " href="www.google.com">
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
              {this.props.totalCount}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
