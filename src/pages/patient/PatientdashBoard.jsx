import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const username = localStorage.getItem('username');

  return (
    <div className="container mt-4">
      <h2>Welcome, {username || 'Patient'}!</h2>
      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <button onClick={() => navigate('/appointment')} className="btn btn-primary w-100">Book Appointment</button>
        </div>
        <div className="col-md-4 mb-3">
          <button onClick={() => navigate('/lab-reports')} className="btn btn-secondary w-100">View Lab Reports</button>
        </div>
        <div className="col-md-4 mb-3">
          <button onClick={() => navigate('/progress')} className="btn btn-info w-100">Progress Reports</button>
        </div>
        <div className="col-md-4 mb-3">
          <button onClick={() => navigate('/Depression')} className="btn btn-warning w-100">Mental Health Check</button>
        </div>
        <div className="col-md-4 mb-3">
          <button onClick={logout} className="btn btn-danger w-100">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
