import React, { useEffect } from 'react';
import { Search, CalendarCheck, Compass } from 'lucide-react';
import './Transfers.css';

const TRANSFER_STEPS = [
  {
    num: '01',
    title: 'Tell us your trip',
    desc: 'Add your pick-up and drop-off, date, time and flight number, then how many people are travelling and how many suitcases.',
    icon: Search
  },
  {
    num: '02',
    title: 'Choose your vehicle',
    desc: 'We show only the vehicles that actually seat your group, each with its price for the trip.',
    icon: CalendarCheck
  },
  {
    num: '03',
    title: 'Get confirmed',
    desc: 'We review your request and confirm by email — no payment needed to request your transfer.',
    icon: Compass
  }
];

export default function Transfers() {
  useEffect(() => {
    const container = document.getElementById('wst-transfers-widget');
    if (!container) return;

    // Check if widget is already mounted (shadowRoot exists)
    if (container.shadowRoot) return;

    // Remove any stale widget script
    const prevScript = document.getElementById('wst-transfers-widget-script');
    if (prevScript) {
      prevScript.remove();
    }

    // Official WST Injected Transfers Widget script
    const script = document.createElement('script');
    script.id = 'wst-transfers-widget-script';
    script.src = 'https://book.carhiremauritius.com/transfers-widget.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="transfers" className="transfers-section section-padding">
      <div className="container">
        <div className="transfers-header">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>CHAUFFEUR SERVICE</span>
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="transfers-title">REQUEST YOUR TRANSFER</h2>
          <p className="transfers-subtitle">
            A private car and driver dedicated to you and your group, door to door
          </p>
        </div>

        <div className="transfers-widget-container">
          <div id="wst-transfers-widget" data-referer="FbwaL73-4hKKSvz9"></div>
        </div>

        {/* How It Works Steps Block */}
        <div className="transfers-how-block">
          <div className="how-header transfers-how-header">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span>HOW IT WORKS</span>
              <span className="eyebrow-line"></span>
            </div>
            <h3 className="transfers-how-title">Book your transfer in three steps</h3>
          </div>

          <div className="how-grid transfers-how-grid">
            {TRANSFER_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="how-card transfers-how-card">
                  <div className="ghost-num">{step.num}</div>
                  <div className="how-card-inner">
                    <div className="how-step-badge">
                      <Icon size={20} className="step-icon" />
                      <span>STEP {step.num}</span>
                    </div>
                    <h4 className="how-step-title">{step.title}</h4>
                    <p className="how-step-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
