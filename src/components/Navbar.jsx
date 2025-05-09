import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';
 import logo from '../assets/react.svg'; // Ensure you have a logo image in the specified path

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='navbar-container'>
          <img src={logo} alt='Logo' />
          <h1>DeepHeal HMS</h1>
        <ul className='navbar-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
          <li><Link to="/call">Call at Home</Link></li>
          <li><Link to="/lab-test">Lab Test</Link></li>
          <li><Link to="/prescriptions">Prescriptions</Link></li>
          <Link to="/Signin" className='auth-button'>Sign In</Link>
          <Link to="/Signup" className='auth-button'>Sign Up</Link>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
