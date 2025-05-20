import React, { useState } from 'react';
import '../styles/pages/Auth.css';

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
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className='auth-form'>
        <label>Email:</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} required />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
