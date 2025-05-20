import React, { useState } from 'react';
import axios from 'axios';
import Popup from '@/components/Popup';
import { Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentBooking = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    contact: '',
    appointmentType: 'Consultation',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/appointments/', // Replace with your Django API URL
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        alert('Appointment Submitted!');
        setShowPopup(false);
      }
    } catch (err) {
      setError('There was an error submitting your appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-booking ">
      {/* Welcome Section */}
      <section className="welcome-section mb-4">
        <h2 className="text-center mb-3">Welcome to DeepHeal Appointment Booking</h2>
        <p className="text-center">
          Book your appointment with our experienced doctors. Whether it's for a routine consultation, follow-up, or emergency,
          we are here to provide you with the best healthcare experience. Please fill out the form below to schedule your appointment.
        </p>
        <p className="text-center">
          After submitting the form, you will receive a confirmation and instructions for your upcoming visit.
        </p>
      </section>

      {/* Instructions Section */}
      <section className="instructions-section mb-4">
        <h3 className="text-center mb-3">How to Book Your Appointment:</h3>
        <ol className="text-center">
          <li>Fill in your personal details and preferred appointment time.</li>
          <li>Select the type of appointment based on your needs (Consultation, Follow-up, Emergency).</li>
          <li>Submit the form and wait for the confirmation of your appointment.</li>
        </ol>
      </section>

      {/* Button to open the popup */}
      <Button
        variant="primary"
        size="lg"
        onClick={() => setShowPopup(true)}
        className="d-block mx-auto"
      >
        Book Appointment
      </Button>

      {/* Conditionally render the Popup */}
      {showPopup && (
        <Popup title="Book Appointment" onClose={() => setShowPopup(false)} show={showPopup}>
          <Form onSubmit={handleFormSubmit}>
            {/* Name Field */}
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            {/* Contact Field */}
            <Form.Group controlId="formContact" className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
              />
            </Form.Group>

            {/* Appointment Date Field */}
            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Appointment Time Field */}
            <Form.Group controlId="formTime" className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Appointment Type Dropdown */}
            <Form.Group controlId="formAppointmentType" className="mb-3">
              <Form.Label>Appointment Type</Form.Label>
              <Form.Control
                as="select"
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleChange}
                required
              >
                <option value="Consultation">Consultation</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Emergency">Emergency</option>
              </Form.Control>
            </Form.Group>

            {/* Message Field */}
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Additional details or message"
              />
            </Form.Group>

            {/* Summary of Appointment */}
            <div className="appointment-summary mb-3">
              <h5>Review Your Appointment</h5>
              <Row>
                <Col>
                  <strong>Name:</strong> {formData.name}
                </Col>
                <Col>
                  <strong>Contact:</strong> {formData.contact}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Date:</strong> {formData.date}
                </Col>
                <Col>
                  <strong>Time:</strong> {formData.time}
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Type:</strong> {formData.appointmentType}
                </Col>
              </Row>
              {formData.message && (
                <Row>
                  <Col>
                    <strong>Message:</strong> {formData.message}
                  </Col>
                </Row>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button variant="success" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Appointment'}
              </Button>
            </div>

            {/* Error message */}
            {error && <div className="text-danger mt-3 text-center">{error}</div>}
          </Form>
        </Popup>
      )}
    </div>
  );
};

export default AppointmentBooking;
