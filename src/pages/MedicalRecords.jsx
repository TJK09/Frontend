// src/pages/MedicalRecords.jsx
import React from 'react';

const MedicalRecords = () => {
  return (
    <div>
      <h2>Medical Records</h2>
      <p>Upload or view your medical records here.</p>
      <input type="file" accept=".pdf,.jpg,.png" />
    </div>
  );
};

export default MedicalRecords;
