import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/" className="footer-link">Service</a>
          <a href="/about" className="footer-link">Service2</a>
          <a href="/services" className="footer-link">Services3</a>
          <a href="/contact" className="footer-link">Service4</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" className="footer-social"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" className="footer-social"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" className="footer-social"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" className="footer-social"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
