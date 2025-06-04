import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const username = localStorage.getItem('username');

  return (
    <div className="container mt-4">
      <h2>Welcome, Dr. {username || 'Doctor'}</h2>
      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <button onClick={() => navigate('/medical-records')} className="btn btn-primary w-100">View Medical Records</button>
        </div>
        <div className="col-md-4 mb-3">
          <button onClick={() => navigate('/prescriptions')} className="btn btn-success w-100">Prescriptions</button>
        </div>
        <div className="col-md-4 mb-3">
          <button onClick={() => navigate('/reviews')} className="btn btn-warning w-100">Patient Reviews</button>
        </div>
        <div className="col-md-4 mb-3">
          <button onClick={logout} className="btn btn-danger w-100">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
