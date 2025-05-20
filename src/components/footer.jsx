import React from 'react';
import '../styles/components/Footer.css'; // optional for custom tweaks

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-start text-md-left">
          <div className="col-md-4 mb-4">
            <h4 className="text-primary">DeepHeal HMS</h4>
            <p>Empowering healthcare through technology.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/appointment" className="text-light">Appointments</a></li>
              <li><a href="/lab-test" className="text-light">Lab Tests</a></li>
              <li><a href="/reviews" className="text-light">Reviews</a></li>
              <li><a href="/admin" className="text-light">Admin</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: support@deepheal.com</p>
            <p>Phone: +92 300 1234567</p>
            <p>Location: Lahore, Pakistan</p>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center m-0 text-secondary">
          &copy; {new Date().getFullYear()} DeepHeal HMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
