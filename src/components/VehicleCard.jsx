import React from 'react';
import { ArrowRight, Users, Zap, Wind, Luggage } from 'lucide-react';
import './VehicleCard.css';

export default function VehicleCard({ vehicle, onSelect }) {
  const scrollToWidget = () => {
    if (onSelect) onSelect(vehicle);
    const widgetElem = document.getElementById('hero');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="vehicle-card">
      <div className="card-image-box">
        <img 
          src={vehicle.image} 
          alt={`${vehicle.name} rental car in Mauritius`} 
          className="card-img" 
          loading="lazy"
        />
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="car-title">{vehicle.name}</h3>
          <p className="car-subtitle">{vehicle.transmission} · {vehicle.seats} SEATS</p>
        </div>

        <div className="car-specs-row">
          <span className="spec-pill">
            <Zap size={13} /> {vehicle.transmission}
          </span>
          <span className="spec-pill">
            <Users size={13} /> {vehicle.seats} Seats
          </span>
          <span className="spec-pill">
            <Wind size={13} /> A/C
          </span>
          <span className="spec-pill">
            <Luggage size={13} /> {vehicle.luggage || '2 Bags'}
          </span>
        </div>

        <div className="card-footer">
          <button onClick={scrollToWidget} className="card-cta-btn" aria-label={`Book ${vehicle.name}`}>
            <span>BOOK NOW</span>
            <ArrowRight size={16} className="cta-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
