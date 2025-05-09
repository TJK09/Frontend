import React, { useState } from 'react';
import Popup from '@/components/Popup';
import '../styles/pages/CallAtHomeService.css';

const CallAtHomeService = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Service Request Sent!");
    setShowPopup(false);
  };

  return (
    <div className="call-home">
      <h2>Request a Home Service</h2>
      <button onClick={() => setShowPopup(true)}>Request Service</button>

      {showPopup && (
        <Popup title="Home Service Request" onClose={() => setShowPopup(false)}>
          <form className="home-service-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" required />

            <label>Contact Number</label>
            <input type="tel" required />

            <label>Address</label>
            <textarea required rows={3}></textarea>

            <label>Service Needed</label>
            <input type="text" required />

            <label>Preferred Time</label>
            <input type="time" required />

            <button type="submit">Submit Request</button>
          </form>
        </Popup>
      )}
    </div>
  );
};

export default CallAtHomeService;
