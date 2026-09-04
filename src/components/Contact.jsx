import React from 'react';
import { MapPin, Mail, Phone, Clock, Plane } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Brand & Contact Info */}
          <div className="contact-info-column">
            <div className="contact-brand">
              <span className="logo-ride">RIDE</span>
              <span className="logo-moris">MORIS</span>
            </div>

            <p className="contact-brand-sub">
              Modern, reliable, and tourist-friendly car rental in Mauritius. Get in touch for custom vehicle inquiries or multi-week stay offers.
            </p>

            <div className="info-block-group">
              {/* Location */}
              <div className="info-item">
                <div className="info-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="info-label">LOCATION</h4>
                  <p className="info-val">Mauritius · SSR Airport & Island-wide Delivery</p>
                </div>
              </div>

              {/* Email */}
              <div className="info-item">
                <div className="info-icon-box">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="info-label">EMAIL US</h4>
                  <a href="mailto:info@ridemoris.mu" className="info-val info-link">info@ridemoris.mu</a>
                </div>
              </div>

              {/* Customer Support Phone */}
              <div className="info-item">
                <div className="info-icon-box">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="info-label">CUSTOMER SUPPORT</h4>
                  <a href="tel:+23052557779" className="info-val info-link">+230 5255 7779 (Mon–Sun 24/7)</a>
                </div>
              </div>

              {/* WhatsApp Item */}
              <div className="info-item">
                <div className="info-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.485 1.332 5.002l-1.417 5.176 5.297-1.389c1.464.799 3.117 1.218 4.781 1.218h.004c5.517 0 9.993-4.476 9.993-9.993 0-2.673-1.041-5.186-2.931-7.075s-4.402-2.932-7.066-2.932zm0 1.666c4.603 0 8.327 3.724 8.327 8.327 0 2.234-.868 4.334-2.447 5.913-1.579 1.579-3.679 2.447-5.913 2.447h-.003c-1.488 0-2.951-.397-4.232-1.15l-.304-.18-3.146.825.839-3.064-.197-.314c-.827-1.319-1.264-2.846-1.264-4.477 0-4.603 3.724-8.327 8.327-8.327zm-3.551 4.542c-.229 0-.46.086-.649.274-.265.265-.776.758-.776 1.85 0 1.092.795 2.146.905 2.296.11.15 1.536 2.395 3.774 3.337 1.83.77 2.203.616 2.6.572.397-.044 1.278-.522 1.458-1.026.18-.504.18-.936.126-1.026-.054-.09-.204-.15-.424-.26-.22-.11-1.278-.631-1.476-.703-.198-.072-.342-.11-.486.11-.144.22-.558.703-.684.85-.126.147-.252.165-.472.055-.22-.11-.928-.342-1.768-1.091-.653-.582-1.093-1.301-1.221-1.521-.128-.22-.014-.339.096-.448.099-.098.22-.256.33-.384.11-.128.146-.22.22-.366.074-.146.037-.275-.018-.385s-.486-1.171-.666-1.603c-.175-.42-.354-.363-.486-.37-.126-.007-.271-.007-.415-.007z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="info-label">WHATSAPP</h4>
                  <a 
                    href="https://wa.me/23052557779" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="info-val info-link"
                  >
                    +230 5255 7779
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Opening Hours */}
          <div className="contact-info-column">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span>SCHEDULE & AVAILABILITY</span>
            </div>
            <h3 className="section-subtitle-hours">Opening Hours</h3>

            <div className="info-block-group">
              {/* Island-Wide Delivery & Recovery */}
              <div className="info-item">
                <div className="info-icon-box">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="info-label">ISLAND-WIDE DELIVERY & RECOVERY</h4>
                  <p className="info-val">Monday–Friday: 8:30 AM–7:00 PM</p>
                </div>
              </div>

              {/* Airport Delivery & Pick-Up */}
              <div className="info-item">
                <div className="info-icon-box">
                  <Plane size={18} />
                </div>
                <div>
                  <h4 className="info-label">AIRPORT DELIVERY & PICK-UP</h4>
                  <p className="info-val">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
