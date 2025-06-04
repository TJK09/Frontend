// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/pages/Auth.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const tokenResponse = await axios.post('http://127.0.0.1:8000/accounts/token/', {
        username: formData.username,
        password: formData.password,
      });

      const accessToken = tokenResponse.data.access;
      const refreshToken = tokenResponse.data.refresh;

      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);

      const userResponse = await axios.get('http://127.0.0.1:8000/accounts/user/me/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const role = userResponse.data.role;
      alert('Logged in successfully!');

      if (role === 'admin') navigate('/dashboard/admin');
      else if (role === 'doctor') navigate('/dashboard/doctor');
      else if (role === 'patient') navigate('/');
      else navigate('/');
    } catch (err) {
      if (err.response && err.response.data) {
        const detail = err.response.data.detail || 'Login failed';
        if (detail.toLowerCase().includes('email not verified')) {
          setError('');
          alert('Please verify your email before logging in.');
          navigate('/verify-email');
        } else {
          setError(detail);
        }
      } else {
        setError('Server error. Please check your backend is running.');
      }
    }
  };

  return (
    <div className='auth-container'>
      <h2 className="text-center mb-4">Sign In</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit} className='auth-form'>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type='submit' className="btn btn-primary w-100 mb-3">Sign In</button>

        <div className="d-flex justify-content-between">
          <a href="/forget-password" className="text-decoration-none">Forgot Password?</a>
          <a href="/signup" className="text-decoration-none">Register Now</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
