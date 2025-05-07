import React, { useState } from 'react';
import Popup from '@/components/Popup';

const AppointmentBooking = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Appointment Submitted!');
    setShowPopup(false);
  };

  return (
    <div>
      <h2>Appointment Booking</h2>
      <button onClick={() => setShowPopup(true)}>Book Appointment</button>

      {showPopup && (
        <Popup title="Book Appointment" onClose={() => setShowPopup(false)}>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name: <input type="text" required />
            </label>
            <br />
            <label>
              Date: <input type="date" required />
            </label>
            <br />
            <label>
              Time: <input type="time" required />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </Popup>
      )}
    </div>
  );
};

export default AppointmentBooking;
