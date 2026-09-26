import React, { useEffect } from 'react';
import './BookingWidget.css';

export default function BookingWidget() {
  useEffect(() => {
    const container = document.getElementById('wst-rental-widget');
    if (!container) return;

    // Check if widget is already mounted (shadowRoot exists)
    if (container.shadowRoot) return;

    // Remove any stale widget script so the browser re-evaluates the fresh script
    const prevScript = document.getElementById('wst-rental-widget-script');
    if (prevScript) {
      prevScript.remove();
    }

    // Official WST Injected Widget script
    const script = document.createElement('script');
    script.id = 'wst-rental-widget-script';
    script.src = 'https://book.carhiremauritius.com/rental-widget.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="booking-widget-container">
      <div id="wst-rental-widget" data-referer="FbwaL73-4hKKSvz9"></div>
    </div>
  );
}
