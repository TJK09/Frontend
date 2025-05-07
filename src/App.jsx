// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';

// import Home from '/pages/Home';
import AppointmentBooking from './pages/AppointmentBooking';


const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<AppointmentBooking />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
