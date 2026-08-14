import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import About from './components/About';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import MauritiusExperience from './components/MauritiusExperience';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <About />
        <WhyUs />
        <HowItWorks />
        <MauritiusExperience />
        <Testimonials />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer 
        onOpenTerms={() => setIsTermsOpen(true)} 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
      <WhatsAppButton />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}
