import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

const DepressionAnalysis = () => {
  const [formData, setFormData] = useState({
    sleep: '',
    appetite: '',
    energy: '',
    concentration: '',
    anxietyLevel: '',
    doctorNote: '',
  });

  const [result, setResult] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.doctorNote.trim()) {
      alert('Doctor’s prescription is required before evaluating.');
      return;
    }

    // Placeholder logic for AI prediction integration
    setResult('Moderate Depression Detected. Follow-up required.');
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <Card className="p-4 shadow-sm">
        <h3 className="mb-4 text-center">Depression Analysis Evaluation</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>How is your sleep quality?</Form.Label>
            <Form.Control
              type="text"
              name="sleep"
              value={formData.sleep}
              onChange={handleChange}
              placeholder="e.g. Trouble falling asleep"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>How is your appetite?</Form.Label>
            <Form.Control
              type="text"
              name="appetite"
              value={formData.appetite}
              onChange={handleChange}
              placeholder="e.g. Decreased or increased"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Energy Levels</Form.Label>
            <Form.Control
              type="text"
              name="energy"
              value={formData.energy}
              onChange={handleChange}
              placeholder="e.g. Feeling tired throughout the day"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Concentration Ability</Form.Label>
            <Form.Control
              type="text"
              name="concentration"
              value={formData.concentration}
              onChange={handleChange}
              placeholder="e.g. Easily distracted"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Current Level of Anxiety (1–10)</Form.Label>
            <Form.Control
              type="number"
              name="anxietyLevel"
              value={formData.anxietyLevel}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Doctor's Prescription / Notes</Form.Label>
            <Form.Control
              as="textarea"
              name="doctorNote"
              value={formData.doctorNote}
              onChange={handleChange}
              rows={3}
              placeholder="Doctor's confirmation required before evaluation"
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="primary">
              Evaluate Depression Level
            </Button>
          </div>
        </Form>

        {submitted && (
          <Alert variant="warning" className="mt-4 text-center">
            <strong>Result:</strong> {result}
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default DepressionAnalysis;
