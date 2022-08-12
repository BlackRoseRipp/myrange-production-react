import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const location = useLocation()

  return location.pathname.startsWith('/dashboard') ? (
    null
  ) : (
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
