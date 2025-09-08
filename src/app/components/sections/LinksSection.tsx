import React from 'react';
import { LinkCard } from '../ui/LinkCard';

interface LinkData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  url: string;
}

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
    <section 
      className="relative z-10 max-w-sm mx-auto px-6 space-y-3 mb-16"
      aria-label="Main navigation links"
    >
      {links.map((link, index) => (
        <LinkCard
          key={index}
          link={link}
          index={index}
          isHovered={hoveredCard === index}
          onHover={setHoveredCard}
        />
      ))}
    </section>
  );
};
