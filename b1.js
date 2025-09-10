import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import logo from './a.png';
import logo1 from './b.svg';

const CreditCardPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-2">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" >
          <img
            src={logo1}
            alt="Standard Chartered"
            width="180"
            height={50}
          />
        </a>

        {/* Toggle Button (mobile -> opens fullscreen menu) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
          <ul className="navbar-nav mx-auto fw-semibold">
           <li className="nav-item"><a className="nav-link px-3" href="#">Accounts & Deposite</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#">Cards</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#">Loans</a></li>
           
           
            <li className="nav-item"><a className="nav-link px-3" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#">Help</a></li>
          </ul>

          {/* Right Buttons */}
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-success fw-semibold px-3">
              FIND A PRODUCT
            </button>
            <button className="btn btn-success fw-semibold px-4 d-flex align-items-center gap-2">
              <FaLock size={14} /> LOGIN
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fullscreen-menu">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <img
              src={logo1}
              alt="Logo"
              width="100"
              height={50}
            />
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-outline-success fw-semibold px-3">
                FIND A PRODUCT
              </button>
              <button className="btn btn-success fw-semibold px-3 d-flex align-items-center gap-1">
                <FaLock size={14} /> LOGIN
              </button>
              <button
                className="btn btn-light border-0 fs-4"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>

         

          {/* Menu List */}
          <ul className="list-unstyled mt-2">
            {[
              "Accounts & Deposits",
              "Cards",
              "Loans",
              
              "Services",
              "Help",
            ].map((item, index) => (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center px-3 py-3 border-bottom"
              >
                <span>{item}</span>
                <IoIosArrowForward size={18} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CSS */}
      <style jsx>{`
        .fullscreen-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          z-index: 1200;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.3s ease forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CreditCardPage;
