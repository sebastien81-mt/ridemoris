import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './TermsOfUse.css';

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Use | RideMoris";
    
    // Update meta description dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Read the Terms of Use governing RideMoris car rental services in Mauritius.');
    }
  }, []);

  const handleBackToHome = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      <Navbar />
      
      <main className="terms-page section-padding">
        <div className="container">
          <div className="terms-container">
            
            {/* Header / Title */}
            <div className="terms-header">
              <a href="/" onClick={handleBackToHome} className="back-home-btn" aria-label="Back to Home">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </a>

              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                <span>LEGAL</span>
              </div>
              <h1 className="terms-title">Terms of Use</h1>
              <p className="terms-last-updated">Last Updated: August 2026</p>
            </div>

            {/* Legal Document Body */}
            <div className="terms-content">
              
              <section className="terms-section-block">
                <h2>1. Agreement & Service Overview</h2>
                <p>
                  These Terms of Use ("Terms") constitute a legally binding agreement between you ("Renter", "Customer", or "you") and <strong>RideMoris</strong> ("Company", "we", "us", or "our"), governing your access to and use of our website, online booking system, and vehicle rental services across the Republic of Mauritius.
                </p>
                <p>
                  By reserving, picking up, or operating any vehicle provided by RideMoris, you explicitly confirm that you have read, understood, and agreed to comply with all provisions set forth in these Terms.
                </p>
              </section>

              <section className="terms-section-block">
                <h2>2. Driver Qualifications & Required Documents</h2>
                <p>
                  To rent and operate a vehicle from RideMoris, all primary and additional drivers must satisfy the following criteria:
                </p>
                <ul>
                  <li><strong>Minimum Age:</strong> Drivers must be at least 21 years of age. Drivers under 25 may be subject to a young driver surcharge where applicable.</li>
                  <li><strong>Driver's License:</strong> A valid national driver’s license held continuously for a minimum of 1 year without major endorsements. International driving permits (IDP) are recommended alongside licenses not printed in English or French.</li>
                  <li><strong>Passport & Identification:</strong> A valid passport or national identity card is required upon vehicle handover.</li>
                  <li><strong>Payment Method:</strong> A valid credit or debit card registered in the primary driver’s name for payment and security deposit authorization.</li>
                </ul>
              </section>

              <section className="terms-section-block">
                <h2>3. Vehicle Reservation, Delivery & Airport Collection</h2>
                <ol>
                  <li>
                    <strong>Booking Confirmation:</strong> Reservations made online through our official system are subject to vehicle availability and confirmation by RideMoris.
                  </li>
                  <li>
                    <strong>SSR Airport Pickup:</strong> For airport collections at Sir Seewoosagur Ramgoolam International Airport (MRU), a representative will meet you at the designated arrivals area. Renter must provide accurate flight details upon booking.
                  </li>
                  <li>
                    <strong>Hotel & Villa Delivery:</strong> Delivery and pickup services are available at hotels, resorts, and private villas across Mauritius (including Grand Baie, Flic en Flac, Belle Mare, and Le Morne).
                  </li>
                </ol>
              </section>

              <section className="terms-section-block">
                <h2>4. Rental Rates, Fuel Policy & Security Deposit</h2>
                <p>
                  Rental rates include unlimited mileage within the island of Mauritius, standard Third-Party liability insurance, and 24/7 roadside assistance unless explicitly stated otherwise.
                </p>
                <ul>
                  <li><strong>Fuel Policy:</strong> Vehicles are provided with a recorded level of fuel (typically full or quarter tank) and must be returned with the equivalent fuel level. Missing fuel will be charged upon return.</li>
                  <li><strong>Security Deposit:</strong> A refundable security deposit is authorized on your payment card upon collection and released following inspection confirming the vehicle is returned in original condition.</li>
                </ul>
              </section>

              <section className="terms-section-block">
                <h2>5. Permitted Vehicle Use & Prohibitions</h2>
                <p>
                  The Renter agrees to operate the vehicle responsibly and in strict compliance with the Road Traffic Act of Mauritius. The following actions are strictly prohibited:
                </p>
                <ol>
                  <li>Driving on unpaved roads, beaches, sand dunes, or off-road terrain.</li>
                  <li>Operating the vehicle under the influence of alcohol, drugs, or impairing medication.</li>
                  <li>Allowing unauthorized persons not listed on the rental agreement to drive the vehicle.</li>
                  <li>Subleasing, towing, racing, or carrying commercial passengers for hire.</li>
                  <li>Transporting hazardous, flammable, or illegal substances.</li>
                </ol>
              </section>

              <section className="terms-section-block">
                <h2>6. Insurance & Damage Responsibilities</h2>
                <p>
                  All RideMoris rentals include standard Third-Party Cover and Collision Damage Waiver (CDW). 
                </p>
                <ul>
                  <li><strong>Excess / Deductible:</strong> The Renter remains liable for damages up to the maximum deductible amount specified in their rental agreement, unless Super CDW / Zero Excess cover was selected.</li>
                  <li><strong>Exclusions:</strong> Damage to tires, rims, undercarriage, windshield, lost car keys, or interior tears caused by gross negligence or violation of rental terms are not covered by standard insurance and remain the sole responsibility of the Renter.</li>
                </ul>
              </section>

              <section className="terms-section-block">
                <h2>7. Cancellations, Flight Delays & Modifications</h2>
                <p>
                  We understand travel plans can change. Cancellations made at least 48 hours prior to the scheduled pickup time are eligible for a full refund or free rescheduling.
                </p>
                <p>
                  In the event of a flight delay to Mauritius, RideMoris will hold your reservation without penalty provided your valid flight number was included in your initial booking.
                </p>
              </section>

              <section className="terms-section-block">
                <h2>8. Accidents, Traffic Fines & Contact Information</h2>
                <p>
                  In the event of an accident, collision, theft, or breakdown, you must immediately:
                </p>
                <ol>
                  <li>Contact local emergency services or Mauritius Police (Dial 999 / 112) if necessary.</li>
                  <li>Notify the RideMoris 24/7 customer support line immediately at <strong>+230 5255 7779</strong> or via WhatsApp at <strong>+230 5255 7779</strong>.</li>
                  <li>Obtain an official police report and refrain from admitting liability before contacting RideMoris.</li>
                </ol>
                <p>
                  The Renter is solely responsible for all traffic fines, parking violations, and speeding penalties incurred during the rental period.
                </p>
              </section>

              <section className="terms-section-block">
                <h2>9. Governing Law</h2>
                <p>
                  These Terms of Use are governed by and construed in accordance with the laws of the Republic of Mauritius. Any legal disputes or claims arising out of or in connection with RideMoris rental services shall be subject to the exclusive jurisdiction of the courts of Mauritius.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
