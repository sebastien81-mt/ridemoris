import React, { useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import './PrivacyModal.css';

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="terms-modal-overlay" role="dialog" aria-modal="true" aria-label="Privacy Policy">
      {/* Sticky Modal Header Bar */}
      <div className="terms-modal-bar">
        <div className="container terms-bar-inner">
          <div className="terms-logo">
            <span className="logo-ride">RIDE</span>
            <span className="logo-moris">MORIS</span>
          </div>

          <button onClick={onClose} className="terms-close-btn" aria-label="Close Privacy Policy">
            <ArrowLeft size={16} />
            <span>Back to Website</span>
            <X size={18} className="close-x-icon" />
          </button>
        </div>
      </div>

      {/* Main Legal Document Content */}
      <div className="terms-modal-body section-padding">
        <div className="container">
          <div className="terms-container">
            
            {/* Header / Title */}
            <div className="terms-header">
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                <span>LEGAL</span>
              </div>
              <h1 className="terms-title">Privacy Policy</h1>
              <p className="terms-last-updated">Last Updated: 16 June 2026 | Governing Law: Data Protection Act 2017 (Mauritius)</p>
            </div>

            {/* Legal Document Body */}
            <div className="terms-content">
              
              <section className="terms-section-block">
                <h2>1. Overview & Scope</h2>
                <p>
                  This policy explains what personal information we collect when you hire a vehicle or book a transfer with us, how we use and protect it, and the rights you have over it.
                </p>
                <p>
                  This policy applies to personal data we process about:
                </p>
                <ul>
                  <li>Customers and prospective customers who request a quote, make a booking, or hire a vehicle from us;</li>
                  <li>People who use our website ridemoris.mu and our online booking platform;</li>
                  <li>Drivers and additional drivers named on a rental agreement;</li>
                  <li>People who contact us by phone, email, WhatsApp or social media; and</li>
                  <li>Affiliates and partners who promote our vehicles through our platform.</li>
                </ul>
              </section>

              <section className="terms-section-block">
                <h2>2. Who We Are</h2>
                <p>
                  <strong>RideMoris</strong> ("we", "us" or "our") is a car rental company operating across Mauritius. We respect your privacy and are committed to handling your personal data responsibly and lawfully.
                </p>
                <p>
                  For the purposes of the Data Protection Act 2017 of Mauritius, RideMoris is the data controller responsible for the personal data you provide to us through this website, our booking platform, our team, and our partners.
                </p>
                <div className="privacy-contact-card">
                  <p><strong>Our details:</strong></p>
                  <p>RideMoris</p>
                  <p>Mon Desir Road, Plaine Magnien, Mauritius</p>
                  <p>Email: admin@ridemoris.mu</p>
                  <p>Phone / WhatsApp: +230 5255 7779</p>
                </div>
              </section>

              <section className="terms-section-block">
                <h2>3. Information We Collect</h2>
                <p>
                  Because hiring a vehicle is a regulated, contractual activity, we need to collect more information than a typical website. We only collect what is necessary to provide our services safely and meet our legal obligations.
                </p>
                
                <h3>Identity & Driver Information</h3>
                <ul>
                  <li>Full name, date of birth and nationality;</li>
                  <li>Driving licence details (including licence number, country of issue, categories and expiry);</li>
                  <li>Passport or national identity card details, used to verify your identity and age;</li>
                  <li>Details of any additional drivers you add to the rental.</li>
                </ul>

                <h3>Contact & Booking Details</h3>
                <ul>
                  <li>Email address, phone number and WhatsApp number;</li>
                  <li>Your accommodation, hotel or address in Mauritius for delivery and recovery of the vehicle;</li>
                  <li>Pick-up and drop-off locations, dates and times;</li>
                  <li>Flight number and arrival details where you book an airport transfer or airport collection;</li>
                  <li>Your vehicle preferences, insurance and child-seat selections, and any special requests.</li>
                </ul>

                <h3>Payment & Financial Information</h3>
                <ul>
                  <li>Information needed to process your booking, deposit and security hold. Card payments are handled by our payment provider and we do not store full card numbers on our own systems;</li>
                  <li>Billing details and invoice records.</li>
                </ul>

                <h3>Rental & Account Information</h3>
                <ul>
                  <li>Your booking history, rental agreements and account login details on our booking platform;</li>
                  <li>Records of vehicle condition, fuel, mileage, damage, fines or accidents relating to your hire;</li>
                  <li>Correspondence and notes from your interactions with our sales and admin teams.</li>
                </ul>

                <h3>Technical & Website Information</h3>
                <ul>
                  <li>IP address, device and browser type, and pages viewed on our site;</li>
                  <li>Cookies and similar technologies.</li>
                </ul>
              </section>

              <section className="terms-section-block">
                <h2>4. How We Collect Your Data</h2>
                <ul>
                  <li><strong>Directly from you:</strong> When you request a quote, complete a booking, sign a rental agreement, collect a vehicle, or contact our team;</li>
                  <li><strong>Through our booking platform:</strong> When you create an account or make a reservation online;</li>
                  <li><strong>From partners:</strong> Where you book one of our vehicles through a travel partner that we work with;</li>
                  <li><strong>Automatically:</strong> Through cookies and analytics when you browse our website.</li>
                </ul>
              </section>

              <section className="terms-section-block">
                <h2>5. Why We Use Your Information & Legal Basis</h2>
                <p>
                  Under the Data Protection Act 2017 we must have a lawful basis for each use of your personal data:
                </p>
                <ul>
                  <li>Take and manage your booking, deliver and recover the vehicle — <em>Performance of contract</em></li>
                  <li>Verify identity, age and driving licence before vehicle handover — <em>Contract & legal obligation</em></li>
                  <li>Process payments, deposits and security holds — <em>Performance of contract</em></li>
                  <li>Manage insurance, damage, fuel, fines and accident claims — <em>Contract & legitimate interests</em></li>
                  <li>Keep accounting, tax and business records — <em>Compliance with legal obligations</em></li>
                  <li>Respond to enquiries and provide customer support — <em>Contract & legitimate interests</em></li>
                  <li>Prevent fraud, recover unpaid amounts and protect our business — <em>Legitimate interests & legal obligations</em></li>
                </ul>
              </section>

              <section className="terms-section-block">
                <h2>6. Who We Share Your Information With</h2>
                <p>
                  We do not sell your personal data. We share it only where necessary, with:
                </p>
                <ul>
                  <li>Insurers and insurance partners, to arrange cover and manage any claim relating to your hire;</li>
                  <li>Payment processors, to take payment, deposits and security holds securely;</li>
                  <li>Our booking platform, hosting and IT service providers;</li>
                  <li>Authorities, the police and regulators, where required by law (e.g. traffic offences, fines or accidents);</li>
                  <li>Professional advisers such as accountants and lawyers, where necessary.</li>
                </ul>
              </section>

              <section className="terms-section-block">
                <h2>7. International Transfers & Retention</h2>
                <p>
                  Where we transfer personal data outside Mauritius, we take steps required by Part V of the Data Protection Act 2017 to ensure an appropriate level of protection. Transfers for EEA/UK residents are handled in line with GDPR and UK data protection rules.
                </p>
                <p>
                  We keep your personal data only for as long as needed to fulfill rental contracts and meet legal, accounting, and tax obligations under Mauritian law. When no longer required, data is securely deleted or anonymised.
                </p>
              </section>

              <section className="terms-section-block">
                <h2>8. How We Protect Your Information</h2>
                <p>
                  We use appropriate technical and organisational measures to keep your personal data secure against unauthorised access, loss, misuse or alteration. These include restricting access to authorised personnel, securing server systems, and using encrypted connections.
                </p>
              </section>

              <section className="terms-section-block">
                <h2>9. Your Rights</h2>
                <p>
                  Under the Data Protection Act 2017 you have the right to access, rectify, erase, restrict, or object to the processing of your personal data, as well as the right to withdraw consent at any time.
                </p>
                <p>
                  To exercise any of these rights, please contact our team at <strong>admin@ridemoris.mu</strong> or WhatsApp <strong>+230 5255 7779</strong>.
                </p>
              </section>

              <div className="terms-bottom-action">
                <button onClick={onClose} className="btn-primary">
                  <ArrowLeft size={16} />
                  <span>CLOSE & RETURN TO WEBSITE</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
