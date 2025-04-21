import React from 'react';

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="wave-container absolute inset-0">
        <div className="wave" />
      </div>
    </div>
  );
}