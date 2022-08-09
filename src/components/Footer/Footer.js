import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-clean">
      <div className="container">
        <p className="copyright">
            MyRange © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
