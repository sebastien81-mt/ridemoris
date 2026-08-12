import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-ride">RIDE</span>
              <span className="logo-moris">MORIS</span>
            </div>
            <p className="footer-tagline">
              Car rental made simple in Mauritius. Airport collection, hotel delivery, and reliable modern vehicles.
            </p>

            {/* WhatsApp Contact Link in Footer */}
            <div className="footer-whatsapp-box">
              <a 
                href="https://wa.me/23052557779" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-whatsapp-link"
                aria-label="Chat with RideMoris on WhatsApp"
              >
                <svg className="footer-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.485 1.332 5.002l-1.417 5.176 5.297-1.389c1.464.799 3.117 1.218 4.781 1.218h.004c5.517 0 9.993-4.476 9.993-9.993 0-2.673-1.041-5.186-2.931-7.075s-4.402-2.932-7.066-2.932zm0 1.666c4.603 0 8.327 3.724 8.327 8.327 0 2.234-.868 4.334-2.447 5.913-1.579 1.579-3.679 2.447-5.913 2.447h-.003c-1.488 0-2.951-.397-4.232-1.15l-.304-.18-3.146.825.839-3.064-.197-.314c-.827-1.319-1.264-2.846-1.264-4.477 0-4.603 3.724-8.327 8.327-8.327zm-3.551 4.542c-.229 0-.46.086-.649.274-.265.265-.776.758-.776 1.85 0 1.092.795 2.146.905 2.296.11.15 1.536 2.395 3.774 3.337 1.83.77 2.203.616 2.6.572.397-.044 1.278-.522 1.458-1.026.18-.504.18-.936.126-1.026-.054-.09-.204-.15-.424-.26-.22-.11-1.278-.631-1.476-.703-.198-.072-.342-.11-.486.11-.144.22-.558.703-.684.85-.126.147-.252.165-.472.055-.22-.11-.928-.342-1.768-1.091-.653-.582-1.093-1.301-1.221-1.521-.128-.22-.014-.339.096-.448.099-.098.22-.256.33-.384.11-.128.146-.22.22-.366.074-.146.037-.275-.018-.385s-.486-1.171-.666-1.603c-.175-.42-.354-.363-.486-.37-.126-.007-.271-.007-.415-.007z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>HOME</a></li>
              <li><a href="#cars" onClick={(e) => scrollToSection(e, 'cars')}>CARS & FLEET</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>ABOUT US</a></li>
              <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>CONTACT</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Airport Car Pickup</a></li>
              <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Hotel Delivery Service</a></li>
              <li><a href="#cars" onClick={(e) => scrollToSection(e, 'cars')}>Automatic Hatchbacks</a></li>
              <li><a href="#cars" onClick={(e) => scrollToSection(e, 'cars')}>Compact SUV Rental</a></li>
              <li><a href="#cars" onClick={(e) => scrollToSection(e, 'cars')}>7-Seater Family Cars</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} RideMoris. All rights reserved. Built for Mauritius Car Rental.
          </p>
        </div>
      </div>
    </footer>
  );
}
