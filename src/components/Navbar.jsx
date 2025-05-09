import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';
import logo from '../assets/logo.png'; // Adjust path if needed

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">

        {/* Logo + Title on Left */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
          <h4 className="mb-0">DeepHeal HMS</h4>
        </Link>

        {/* Center Links */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/appointment">Appointment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/call-at-home">Call at Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lab-test">Lab Test</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Depression">Depression Analysis</Link>
          </li>
        </ul>

        {/* Auth Buttons on Right */}
        <div className="d-flex">
          <Link to="/signin" className="btn btn-outline-primary me-2">Sign In</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
