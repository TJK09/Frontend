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
    { name: 'Dr. Will Smith', speciality: 'Orthopedic Surgeon', image: 'https://via.placeholder.com/150' },
  ];

  const faqs = [
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment through our website or by calling our helpline. Or simply go to the appointment booking section and there add your credentials and book an appointment',
    },
    {
      question: 'Do you offer home services?',
      answer: 'Yes, we provide home services for certain medical needs.',
    },
    {
      question: 'Are lab tests available?',
      answer: 'We offer a wide range of lab tests with quick results.',
    },
    {
      question: 'Can we book an appointment without loggin in?',
      answer: 'No, for that you have to Signup or Signin, to get your information',
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
      <section className="home-doctors py-4">
        <div className="container">
          <h2 className="mb-4 text-center">Our Doctors</h2>
          <div className="row">
            {doctors.map((doc, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 text-center">
                  <img src={doc.image} alt={doc.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{doc.name}</h5>
                    <p className="card-text">{doc.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


          {/* FAQs Section */}
    <section className="home-faqs py-4">
      <div className="container">
        <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
        <div className="row">
          {faqs.map((faq, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-3 border rounded h-100">
                <h5>{faq.question}</h5>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
};

export default Home;
