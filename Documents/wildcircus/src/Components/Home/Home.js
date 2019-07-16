import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="row">
      {/* NAVBAR */}
      <div className="col-md-12 mt-5">
        <div className="navbar navbar-expand-md navbar-light">
          <div className="navbar-brand">
            <a href="/">
              <img width="300px" src="http://www.loan-truong.fr/img/portfolio/wild_circus/header_wild_circus.jpg" alt="logo" />
            </a>
          </div>
          <div className="navbar-nav ml-auto">
            <div className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/show">Shows</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/info">Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home