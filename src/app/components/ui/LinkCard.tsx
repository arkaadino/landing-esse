// LinkCard.tsx
import React from 'react';

interface LinkData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  url: string;
  variant?: 'cream' | 'gradient' | 'grabfood' | 'gojek' | 'shopeefood' | 'meeting';
}

interface LinkCardProps {
  link: LinkData;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ 
  link, 
  index, 
  isHovered, 
  onHover
}) => {
  const handleClick = () => {
    if (link.url.startsWith('#')) {
      document.querySelector(link.url)?.scrollIntoView({ behavior: 'smooth' });
    } else if (link.url.endsWith('.pdf')) {
      window.open(link.url, '_blank');
    } else {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  const variant = link.variant || 'cream';

  return (
    <article
      className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] rounded-xl link-card-${variant} ${
        isHovered ? 'scale-[1.02] shadow-xl' : ''
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`${link.title}: ${link.subtitle}`}
    >
      <div className="p-5 flex items-center space-x-4">
        <div className="icon flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          {link.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="title font-medium text-base mb-0.5 transition-colors duration-300">
            {link.title}
          </h3>
          <p className="subtitle text-sm font-light">
            {link.subtitle}
          </p>
        </div>
        
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <div className="dot w-1.5 h-1.5 rounded-full"></div>
        </div>
      </div>
    </article>
  );
};

// LinksSection.tsx
interface LinksSectionProps {
  links: LinkData[];
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
}

export const LinksSection: React.FC<LinksSectionProps> = ({
  links,
  hoveredCard,
  setHoveredCard
}) => {
  return (
    <section id="links" className="py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-4">
        {links.map((link, index) => (
          <LinkCard
            key={index}
            link={link}
            index={index}
            isHovered={hoveredCard === index}
            onHover={setHoveredCard}
          />
        ))}
      </div>
    </section>
  );
};