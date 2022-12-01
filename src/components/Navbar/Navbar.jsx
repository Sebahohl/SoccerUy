import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
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
        <a className="navbar-brand" href="#Inicio">
          Soccer Uy
        </a>
        <div className="navbar-toggler cart">
          <CartWidget />
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link" href="#FutbolCancha">
                Zapatos de Futbol 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Futbol5">
                Zapatos de Futbol 5
              </a>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <CartWidget />
            {/* <i class="bi bi-cart4"></i> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;