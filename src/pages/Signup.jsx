import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'patient',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/user/register/', formData);

      if (response.status === 201 || response.data?.message) {
        alert('User registered successfully!');
        console.log('Registration success:', response.data);
        navigate('/emailverification');
      } else {
        setError('Registration failed: Unexpected response from server.');
        console.warn('Unexpected response:', response);
      }

    } catch (error) {
      if (error.response) {
        console.error('Registration failed:', error.response.data);
        const errData = error.response.data;
        setError(
          errData.detail ||
          errData.message ||
          (typeof errData === 'string' ? errData : JSON.stringify(errData)) ||
          'Registration failed.'
        );
      } else {
        console.error('Network or server error:', error.message);
        setError('Network or server error. Please try again later.');
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2 className="text-center mb-4">Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            required
            autoFocus
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Signup;
