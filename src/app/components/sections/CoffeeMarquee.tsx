import React from 'react';

interface CoffeeMarqueeProps {
  specialties: string[];
}

export const CoffeeMarquee: React.FC<CoffeeMarqueeProps> = ({ specialties }) => {
  return (
    <section className="relative z-10 mb-16 overflow-hidden" aria-label="Coffee specialties">
      <div className="bg-amber-900 border-t border-b border-amber-900/30 py-4 px-6">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...specialties, ...specialties, ...specialties].map((specialty, i) => (
            <span 
              key={i} 
              className="text-white font-medium mx-8 text-lg"
              aria-hidden={i >= specialties.length}
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};