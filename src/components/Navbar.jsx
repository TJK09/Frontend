// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/call-at-home">Call at Home</Link></li>
        <li><Link to="/lab-test">Lab Test</Link></li>
        <li><Link to="/lab-reports">Lab Reports</Link></li>
        <li><Link to="/medical-records">Medical Records</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/prescriptions">Prescriptions</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#007BFF',
    padding: '10px',
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  }
};

export default Navbar;
