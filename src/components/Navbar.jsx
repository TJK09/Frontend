import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Navbar.css';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/Logo.jpeg'

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('access_token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('role');
    navigate('/login');
  };

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
            <Link className="nav-link" to="/lab-test">Lab Test</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Depression">Depression Analysis</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About-Us">About Us</Link>
          </li>
        </ul>

        {/* Auth Buttons or Profile Icon */}
        <div className="d-flex align-items-center">
          {!isLoggedIn ? (
            <Link to="/signin" className="btn btn-outline-primary me-2">Login</Link>
          ) : role === 'patient' ? (
            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUserCircle size={20} className="me-1" />
                Account
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/patient/profile">Profile</Link></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
