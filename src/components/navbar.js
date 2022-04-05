import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-danger">
        <Link to="/" className="navbar-brand">
          Goal to fit
        </Link>
        <ul className="nav justify-content-end">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Report
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Activity
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
