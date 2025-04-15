import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const totalQuantity = state.reduce((acc, item) => acc + item.qty, 0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Multi-shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle dropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className={`buttons ${isOpen ? "show" : ""}`}>
            <Link to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i> Login
            </Link>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart({totalQuantity})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
