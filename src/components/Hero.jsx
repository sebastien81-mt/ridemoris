import React from 'react';
import BookingWidget from './BookingWidget';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background Image Container with Dark Overlay */}
      <div className="hero-bg-wrapper">
        <picture className="hero-bg-picture">
          <source 
            type="image/avif" 
            srcSet="/images/hero-480w.avif 480w, /images/hero-768w.avif 768w, /images/hero-1200w.avif 1200w, /images/hero-1600w.avif 1600w" 
            sizes="100vw" 
          />
          <source 
            type="image/webp" 
            srcSet="/images/hero-480w.webp 480w, /images/hero-768w.webp 768w, /images/hero-1200w.webp 1200w, /images/hero-1600w.webp 1600w" 
            sizes="100vw" 
          />
          <img 
            src="/images/hero-1200w.jpg" 
            srcSet="/images/hero-480w.jpg 480w, /images/hero-768w.jpg 768w, /images/hero-1200w.jpg 1200w, /images/hero-1600w.jpg 1600w" 
            sizes="100vw"
            alt="RideMoris vehicle driving on Mauritius coastal road" 
            className="hero-bg-image" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container-centered">
        
        {/* CENTERED HERO HEADER */}
        <div className="hero-header-centered">
          <div className="eyebrow eyebrow-centered">
            <span className="eyebrow-line"></span>
            <span>CAR RENTAL MAURITIUS</span>
            <span className="eyebrow-line"></span>
          </div>

          <h1 className="hero-title-centered">
            EXPLORE MAURITIUS <span className="hero-highlight">YOUR WAY</span>
          </h1>

          <p className="hero-description-centered">
            Easy booking, reliable vehicles, airport pickup, and island-wide delivery.
          </p>
        </div>

        {/* OFFICIAL INJECTED BOOKING WIDGET */}
        <BookingWidget />

      </div>
    </section>
  );
}
