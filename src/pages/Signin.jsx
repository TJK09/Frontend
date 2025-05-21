import React, { useState } from 'react';
import '../styles/pages/Auth.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    alert('Signed In');
  };

  return (
    <div className='auth-container'>
      <h2 className="text-center mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className='auth-form'>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
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
          <Link to="/forget-password" className="text-decoration-none">Forgot Password?</Link>
          <Link to="/signup" className="text-decoration-none">Register Now</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
