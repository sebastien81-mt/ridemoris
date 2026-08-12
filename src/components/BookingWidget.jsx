import React, { useEffect } from 'react';
import './BookingWidget.css';

export default function BookingWidget() {
  useEffect(() => {
    // 1. Remove any stale rental-widget scripts to ensure fresh execution on mount
    const oldScripts = document.querySelectorAll('script[src*="rental-widget.js"]');
    oldScripts.forEach((s) => s.remove());

    // 2. Clear stale container DOM if present
    const container = document.getElementById('wst-rental-widget');
    if (container) {
      container.innerHTML = '';
    }

    // 3. Append fresh script to re-initialize widget on mount
    const script = document.createElement('script');
    script.id = 'wst-rental-widget-script';
    script.src = `https://book.carhiremauritius.com/rental-widget.js?t=${Date.now()}`;
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
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
