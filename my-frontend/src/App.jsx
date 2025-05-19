// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/Home';
import AppointmentBooking from './pages/AppointmentBooking';
import CallAtHomeService from './pages/CallAtHomeService';
import LabTestBooking from './pages/LabTestBooking';
import LabReports from './pages/LabReports';
import MedicalRecords from './pages/MedicalRecords';
import ProgressReports from './pages/ProgressReports';
import DoctorPrescription from './pages/DoctorPrescription';
import DoctorReviews from './pages/DoctorReviews';
import AdminManagement from './pages/AdminManagement';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import DepressionAnalysis from './pages/DepressionAnalysis';


const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<AppointmentBooking />} />
          <Route path="/call-at-home" element={<CallAtHomeService />} />
          <Route path="/lab-test" element={<LabTestBooking />} />
          <Route path="/lab-reports" element={<LabReports />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/progress" element={<ProgressReports />} />
          <Route path="/prescriptions" element={<DoctorPrescription />} />
          <Route path="/Depression" element={<DepressionAnalysis/>}/>
          <Route path="/reviews" element={<DoctorReviews />} />
          <Route path="/admin" element={<AdminManagement />} />
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Signin" element={<Signin/>}/>          
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
