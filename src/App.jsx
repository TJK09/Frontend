// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/Home';
import AppointmentBooking from './pages/patient/AppointmentBooking';
import CallAtHomeService from './pages/patient/CallAtHomeService';
import LabTestBooking from './pages/patient/LabTestBooking';
import LabReports from './pages/patient/LabReports';
import MedicalRecords from './pages/doctor/MedicalRecords';
import ProgressReports from './pages/patient/ProgressReports';
import DoctorPrescription from './pages/doctor/DoctorPrescription';
import DoctorReviews from './pages/doctor/DoctorReviews';
import AdminManagement from './pages/admin/AdminManagement';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import DepressionAnalysis from './pages/patient/DepressionAnalysis';
import Options from "./pages/Options";
import PatientDashboard from './pages/patient/PatientdashBoard';
import DoctorDashboard from './pages/doctor/DoctordashBoard';
import AdminDashboard from './pages/admin/AdmindashBoard';
import EmailVerificationStatus from './pages/EmailVerificationStatus';
import VerifyEmailToken from './pages/VerifyEmailToken';
import AboutUs from './pages/About';


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
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>   
          <Route path="/login" element={<Options/>}/>
          <Route path="/login/admin" element={<Signin/>}/>
          <Route path="/login/patient" element={<Signin/>}/>
          <Route path="/login/Doctor" element={<Signin/>}/>
          <Route path="/dashboard/patient" element={<PatientDashboard />} />
          <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} /> 
          <Route path="/emailverification" element={<EmailVerificationStatus />} />
          <Route path="/verify-email" element={<VerifyEmailToken />} />
          <Route path="/About-us" element={<AboutUs/>}/>      
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
