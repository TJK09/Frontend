import React, { useState } from 'react';
import axios from 'axios';
import Popup from '@/components/Popup';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img4 from '../../assets/DA.jpg';
import img5 from '../../assets/DB.jpg';
import img6 from '../../assets/DC.jpg';
import img7 from '../../assets/DD.jpg';
import img8 from '../../assets/DE.jpg';
import img12 from '../../assets/DF.jpg';


const AppointmentBooking = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    description: '',
    doctor: '',
  });

  const doctors = [
    {
      id: 24,
      name: 'Dr. Taj Khan',
      specialization: 'Cardiologist',
      image: img4,
    },
    {
      id: 25,
      name: 'Dr. Muhammad Rehman',
      specialization: 'Dermatologist',
      image: img5,
    },
    {
      id: 26,
      name: 'Dr. Mehmood Ul Hassan',
      specialization: 'Neurologist',
      image: img6,
    },
    {
      id: 27,
      name: 'Dr. Anwar Khan',
      specialization: 'Orthopedic',
      image: img7,
    },
    {
      id: 28,
      name: 'Dr. Fatima Zahid',
      specialization: 'Psychiatrist',
      image: img12,
    },
    {
      id: 29,
      name: 'Dr. Ali Raza',
      specialization: 'Medical Specialist',
      image: img8,
    },
    
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/appointments/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );

      if (response.status === 201) {
        alert('Appointment Submitted!');
        setShowPopup(false);
        setFormData({ date: '', time: '', description: '', doctor: '' });
        setSelectedDoctor(null);
      }
    } catch (err) {
      console.error('Submit error:', err.response?.data || err.message);
      setError('There was an error submitting your appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-booking container py-4 ">
      <h2 className="text-center mb-3">Book an Appointment</h2>
      <p className="text-center mb-4">Choose a doctor and book your appointment.</p>

    <div className="container">
  <div className="row">
    {doctors.map((doctor) => (
      <div key={doctor.id} className="col-md-4 mb-4 d-flex justify-content-center">
        <div
          className="card"
          style={{ width: '18rem', cursor: 'pointer' }}
          onClick={() => {
            setSelectedDoctor(doctor);
            setFormData((prev) => ({ ...prev, doctor: doctor.id }));
            setShowPopup(true);
          }}
        >
              <img 
      src={doctor.image} 
      className="card-img-top" 
      alt={doctor.name} 
      style={{ objectFit: "fill", width: "100%", height: "200px" }} 
    />

          <div className="card-body">
            <h5 className="card-title">{doctor.name}</h5>
            <p className="card-text">{doctor.specialization}</p>
            <Button variant="primary" className="w-100">Book Appointment</Button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {showPopup && (
        <Popup title="Book Appointment" onClose={() => setShowPopup(false)} show={showPopup}>
          <Form onSubmit={handleFormSubmit}>
            {selectedDoctor && (
              <div className="mb-3">
                <strong>Booking with:</strong> {selectedDoctor.name} ({selectedDoctor.specialization})
              </div>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} rows={3} />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Appointment'}
              </Button>
            </div>

            {error && <div className="text-danger mt-3 text-center">{error}</div>}
          </Form>
        </Popup>
      )}
    </div>
  );
};

export default AppointmentBooking;
