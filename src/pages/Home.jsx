import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/pages/Home.css';

const Home = () => {
  const images = [
    {
      src: 'https://via.placeholder.com/800x300?text=Slide+1',
      caption: 'Providing Quality Healthcare Services',
    },
    {
      src: 'https://via.placeholder.com/800x300?text=Slide+2',
      caption: 'Your Health, Our Priority',
    },
    {
      src: 'https://via.placeholder.com/800x300?text=Slide+3',
      caption: 'Trusted by Thousands of Patients',
    },
  ];

  const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Emily Johnson', specialty: 'Pediatrician', image: 'https://via.placeholder.com/150' },
    { name: 'Dr. Michael Brown', specialty: 'Dermatologist', image: 'https://via.placeholder.com/150' },
  ];

  const faqs = [
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment through our website or by calling our helpline.',
    },
    {
      question: 'Do you offer home services?',
      answer: 'Yes, we provide home services for certain medical needs.',
    },
    {
      question: 'Are lab tests available?',
      answer: 'We offer a wide range of lab tests with quick results.',
    },
  ];

  return (
    <div className='home-container'>
      {/* Image Slider */}
      <section className='home-slider'>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {images.map((item, index) => (
            <div key={index}>
              <img src={item.src} alt={`Slide ${index + 1}`} />
              <p className='legend'>{item.caption}</p>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Doctor Gallery */}
      <section className='home-doctors'>
        <h2>Our Doctors</h2>
        <div className='doctor-grid'>
          {doctors.map((doc, index) => (
            <div className='doctor-card' key={index}>
              <img src={doc.image} alt={doc.name} />
              <h3>{doc.name}</h3>
              <p>{doc.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className='home-faqs'>
        <h2>Frequently Asked Questions</h2>
        <div className='faq-list'>
          {faqs.map((faq, index) => (
            <div className='faq-item' key={index}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
