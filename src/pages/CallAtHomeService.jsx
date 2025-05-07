// src/pages/CallAtHomeService.jsx
import React, { useState } from 'react';
import Popup from '/components/Popup';

const CallAtHomeService = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Call-at-Home service requested!');
    setShowPopup(false);
  };

  return (
    <div>
      <h2>Call at Home Service</h2>
      <button onClick={() => setShowPopup(true)}>Request Service</button>

      {showPopup && (
        <Popup title="Call at Home" onClose={() => setShowPopup(false)}>
          <form onSubmit={handleSubmit}>
            <label>
              Address: <input type="text" required />
            </label><br />
            <label>
              Preferred Time: <input type="time" required />
            </label><br />
            <button type="submit">Request</button>
          </form>
        </Popup>
      )}
    </div>
  );
};

export default CallAtHomeService;
