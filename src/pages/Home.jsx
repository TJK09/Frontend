import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/pages/Home.css';
import img from '../assets/1.webp';
import img2 from '../assets/patient-rooms-1.jpg';
import img3 from  '../assets/3.jpeg';
import img4 from '../assets/DA.jpg';
import img5 from '../assets/DB.jpg';
import img6 from '../assets/DC.jpg';
import img7 from '../assets/DD.jpg';
import img8 from '../assets/DE.jpg';
import img12 from '../assets/DF.jpg';
import { Link } from 'react-router-dom';
import img9 from '../assets/appoint.webp';
import img10 from '../assets/lab.jfif.jpg';
import img11 from '../assets/Medical.jfif.jpg';
import dep from '../assets/dep.jfif.jpg';

const Home = () => {
  const images = [
    {
      src: img,
      caption: 'Providing Quality Healthcare Services',
    },
    {
      src: img2,
      caption: 'Your Health, Our Priority',
    },
    {
      src: img3,
      caption: 'Trusted by Thousands of Patients',
    },
  ];

  const doctors = [
    {
      id: 24,
      name: 'Dr. Taj Khan',
      specialty: 'Cardiologist',
      image: img4,
    },
    {
      id: 25,
      name: 'Dr. Muhammad Rehman',
      specialty: 'Dermatologist',
      image: img5,
    },
    {
      id: 26,
      name: 'Dr. Mehmood Ul Hassan',
      specialty: 'Neurologist',
      image: img6,
    },
    {
      id: 27,
      name: 'Dr. Anwar Khan',
      specialty: 'Orthopedic',
      image: img7,
    },
    {
      id: 28,
      name: 'Dr. Fatima Zahid',
      specialty: 'Psychiatrist',
      image: img12,
    },
    {
      id: 29,
      name: 'Dr. Ali Raza',
      specialty: 'Medical Specialist',
      image: img8,
    },
    
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
    <div className='home-container bg-dark'>
      {/* Image Slider */}
      <section className='home-slider bg-dark'>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {images.map((item, index) => (
            <div key={index}>
              <img src={item.src} alt={`Slide ${index + 1}`} style={{objectFit:"cover", width:"100%", height:600}} />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="services-section py-5">
          <div className="container text-center">
            <h2 className="mb-4 text-light">Our Services</h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm bg-dark">
                   <img src={img9} alt="Card-Img" className="card-img-top" style={{width:"100%", height:200, objectFit: "cover" }}></img>
                  <div className="card-body text-light">
                    <h5 className= "card-title">Appointment Booking</h5>
                    <p className="card-text">
                      Now you can book your doctor appointments with a click.
                    </p>
                    <Link to="appointment" className='btn btn-danger'>Book your Appointment</Link>
                  </div>
                </div>
              </div>
              <div className= "col-md-6 mb-4">
                <div className="card h-100 shadow-sm bg-dark">
                  <img src={img10} alt="Card-Img" className="card-img-top" style={{width:"100%", height:200, objectFit: "cover" }}></img>
                  <div className="card-body text-light">
                    <h5 className="card-title">Lab & Diagnostic</h5>
                    <p className="card-text">Fully Equipped Labs for routine and specialized diagnostics.</p>
                    <Link to="/lab-test" className='btn btn-danger'>Conduct Lab Tests</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm bg-dark">
                   <img src={dep} alt="Card-Img" className="card-img-top" style={{width:"100%", height:200, objectFit: "cover" }}></img>
                  <div className="card-body text-light">
                    <h5 className="card-title">
                      AI based Depression Analysis
                    </h5>
                    <p className="card-text">
                      AI based Depression Analysis with advanced algorithms and machine learning to detect that what is the condition of the patient
                    </p>
                    <Link to="/Depression" className='btn btn-danger'>Depression Check</Link>
                  </div> 
                </div>
              </div>
              <div className="col-md-6 mb-4 ">
                <div className="card h-100 shadow-sm bg-dark">
                   <img src={img11} alt="Card-Img" className="card-img-top" style={{width:"100%", height:200, objectFit: "cover" }}></img>
                  <div className="card-body bg-dark">
                    <h5 className="card-title text-white bg-dark">
                      Medical Records
                    </h5>
                    <p className="card-text text-white">
                      Now you dont have to carry the burden of your medical files, You'll have all the data stored in the system.
                    </p>
                    <Link to="/medical-records" className='btn btn-danger' >Medical Records</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

            {/* Doctor Gallery */}
      <section className="home-doctors py-4">
        <div className="container">
          <h2 className="mb-2 text-center text-light">Our Doctors</h2>
          <div className="row">
            {doctors.map((doc, index) => (
              <div className="col-md-4 mb-2" key={index}>
                <div className="card h-100 text-center">
                  <img src={doc.image} alt={doc.name} className="card-img-top" style={{width: "100%", height: 400, objectFit: "fill"}} />
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

      <section className= "discover-section py-5 bg-dark">
        <div className="container text-center text-light">
            <h2 ckassName="mb-4 text-light">Discover our Hospital</h2>
            <div className="row align-items-center">
              <div className="col-md-12 mb-4 mb-md-0">
                <img src={img} alt="Disover" className='img-fluid rounded'></img>
              </div>
              <div className="col-md-12 text-dark">
                <p>We are comitted to delivering World-Class healthcare services with state of the art facilities, highly qualified professional staff, and compassionate care.</p>
                <Link to="/About-Us" className="btn btn-success mt-3">Discover More</Link>
              </div>
            </div>
        </div>
      </section>

      <section className=" news-section py-5 bg-dark">
        <div className= "container text-center">
          <h2 className= "mb-4 text-light">News & Events</h2>
          <div className='row'>
            <div className=" col-md-6 mb-4">
              <div className= "card h-60 shadow-sm">
                <img src={img3} alt="News 1" className="card-img-top"  style={{width:"100%", height: 200, objectFit: "cover"}}/>
                <div className="card-body">
                  <h5 className="card-title">How our depression System works</h5>
                  <p className="card-text">
                    The system is equipped with an Advanced AI model that will detect your depression level through some expert questionarries provided to them by our specialized Psychaitrist
                  </p>
                </div>
              </div>
            </div>
            <div className= "col-md-6 mb-4">
              <div className=" card h-600 shadow-sm">
                <img src={img2} alt="News-2" className="card-img-top" style={{width:"100%", height:200, objectFit:"cover"}}></img>
                <div className=" card-body">
                  <h5 className="card-title">
                    Free Health Camp 
                  </h5>
                  <p className="card-text">
                    We are organizing a free health camp to conduct free medical checkups soon. You can visit the camp and schedule your free of cost checkups from our specialized volunteers.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


          {/* FAQs Section */}
    <section className="home-faqs py-4 bg-dark">
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
