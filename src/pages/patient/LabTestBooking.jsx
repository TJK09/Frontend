import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap'; // Import necessary Bootstrap components
import Popup from '@/components/Popup'; // Assuming your Popup component is inside 'components'
import labTestImage from '../../assets/labtest.jpg'; // Import the image for the lab test (ensure image is placed in the correct path)
import '../../styles/pages/LabTestBooking.css'; // Import your custom CSS

const LabTestBooking = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    testType: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Lab test booked!');
    setShowPopup(false);
  };

  return (
    <div className="lab-test-booking">
      {/* Content Before Popup */}
      <div className="intro-section text-center mb-5">
        <h2>Book Your Lab Test Easily</h2>
        <p>
          Need a lab test? We provide a variety of lab tests to meet your needs. From blood tests to specialized diagnostics, schedule your test with us today.
        </p>

        <div className="image-container mb-4">
          <img
            src={labTestImage} // Reference the local image
            alt="Lab Test"
            className="img-fluid"
          />
        </div>

        <p>
          Choose the test type and book an appointment for the test at your convenience.
        </p>
      </div>

      {/* Button to Open the Popup */}
      <div className="text-center mb-4">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setShowPopup(true)}
        >
          Book Lab Test
        </Button>
      </div>

      {/* Conditionally Render the Popup */}
      {showPopup && (
        <Popup title="Book Lab Test" onClose={() => setShowPopup(false)} show={showPopup}>
          <Form onSubmit={handleSubmit}>
            {/* Test Type Field */}
            <Form.Group controlId="formTestType" className="mb-3">
              <Form.Label>Test Type</Form.Label>
              <Form.Control
                type="text"
                name="testType"
                value={formData.testType}
                onChange={handleChange}
                placeholder="Enter the test type"
                required
              />
            </Form.Group>

            {/* Test Date Field */}
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

            {/* Submit Button */}
            <div className="text-center">
              <Button variant="success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Popup>
      )}
    </div>
  );
};

export default LabTestBooking;
