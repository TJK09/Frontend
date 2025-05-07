// src/components/Popup.jsx
import React from 'react';

const Popup = ({ title, children, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <div style={styles.header}>
          <h3>{title}</h3>
          <button onClick={onClose} style={styles.closeBtn}>X</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  popup: {
    background: '#fff', padding: '20px', borderRadius: '8px', width: '400px', maxWidth: '90%',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px',
  },
  closeBtn: {
    border: 'none', background: 'red', color: 'white', padding: '5px 10px', cursor: 'pointer',
  }
};

export default Popup;
