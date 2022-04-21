import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

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
              <i class="fa-solid fa-house"></i>
              Report
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">
              <i class="fa-solid fa-user"></i>
              Create User
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              <i class="fa-solid fa-person-running"></i>
              Create Activity
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
