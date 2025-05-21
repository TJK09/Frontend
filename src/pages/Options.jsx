import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/1.webp";
import img2 from "../assets/3.jpeg";
import img3 from "../assets/D1.jpg";

function Option() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-white">Login As</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="card text-center bg-dark">
            <img src={img} alt="Doctor" className="card-img-top img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Doctor</h5>
              <Link to="/login/doctor" className="btn btn-primary">Login as Doctor</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center bg-dark">
            <img src={img2} alt="Patient" className="card-img-top img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Patient</h5>
              <Link to="/login/patient" className="btn btn-primary">Login as Patient</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center bg-dark">
            <img src={img3} alt="Admin" className="card-img-top img-fluid" style={{ objectFit: "cover", width: "100%", height: 233 }} />
            <div className="card-body">
              <h5 className="card-title">Admin</h5>
              <Link to="/login/admin" className="btn btn-primary">Login as Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option;
