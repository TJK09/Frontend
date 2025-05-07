// src/pages/LabTestBooking.jsx
import React, { useState } from 'react';
import Popup from '/components/Popup';

const LabTestBooking = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Lab test booked!');
    setShowPopup(false);
  };

  return (
    <div>
      <h2>Lab Test Booking</h2>
      <button onClick={() => setShowPopup(true)}>Book Test</button>

      {showPopup && (
        <Popup title="Book Lab Test" onClose={() => setShowPopup(false)}>
          <form onSubmit={handleSubmit}>
            <label>
              Test Type: <input type="text" required />
            </label><br />
            <label>
              Date: <input type="date" required />
            </label><br />
            <button type="submit">Submit</button>
          </form>
        </Popup>
      )}
    </div>
  );
};

export default LabTestBooking;
