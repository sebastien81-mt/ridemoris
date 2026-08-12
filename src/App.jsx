import React, { useState, useEffect } from 'react';
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
import TermsOfUse from './pages/TermsOfUse';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isTermsPage = currentPath === '/terms-and-conditions';

  if (isTermsPage) {
    return <TermsOfUse />;
  }

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
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
