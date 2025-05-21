import React, { useState } from 'react';
import '../styles/pages/Auth.css';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    alert('Signed Up');
  };

  return (
    <div className='auth-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className='auth-form'>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} required />
        <label>Mobile Number:</label>
        <input type='number' name='Mobile Number' value={formData.number} onChange={handleChange} required />
        <label>Date of Birth</label>
        <input type='date' name='Date of Birth' value={formData.DOB} onChange={handleChange} required />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
