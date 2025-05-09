// src/components/Popup.jsx
import React from 'react';
import '../styles/components/Popup.css';

function Popup({ title, children, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-header">
          <h3>{title}</h3>
          <button className="popup-close-btn" onClick={onClose}>X</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Popup;
