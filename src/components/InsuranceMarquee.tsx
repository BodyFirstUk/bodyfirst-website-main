import React from 'react';

interface Insurer {
  name: string;
  logo: string;
}

interface Props {
  items: Insurer[];
  /** animation duration in seconds */
  duration?: number;
}

const InsuranceMarquee: React.FC<Props> = ({ items, duration = 20 }) => {
  // Duplicate items so the track can translate by -50% and appear seamless
  const duplicated = [...items, ...items];

  const trackStyle: React.CSSProperties = {
    animationDuration: `${duration}s`,
  };

  return (
    <div className="marquee" aria-label="Insurance partners">
      <div className="marquee-track" style={trackStyle}>
        {duplicated.map((ins, i) => (
          <div key={`${ins.name}-${i}`} className="marquee-item bg-white px-6 py-4 rounded-lg shadow-md ring-1 ring-teal-100">
            <img
              src={ins.logo}
              alt={ins.name}
              className="h-14 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceMarquee;
