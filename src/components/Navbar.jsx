import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">


      <Link className="navbar-brand" to="/">
        Navbar
      </Link>


      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">


        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/netflixhome">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/netflixshows">
              Shows
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/netflixmovies">
              Movies
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Team">
              Team
            </Link>
          </li>
          
        </ul>

        <div className="ms-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            height="30"
            width="50"

          />
        </div>
      </div>
    </nav>
  );
};
