import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul>
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
    </div>
  );
};

export default Navbar;
