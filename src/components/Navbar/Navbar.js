import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import '../../App.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 mb-2">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          <img
            style={{ maxWidth: '180px' }}
            src={Logo}
            alt="Logo de Rick & Morty"
          />
          <span style={{ color: '#08b2c9' }}> App</span>
        </Link>
        <style jsx>{`
          button[aria-expanded='false'] > .close {
            display: none;
          }
          button[aria-expanded='true'] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episodes
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Locations
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
