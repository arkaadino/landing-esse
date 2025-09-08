import React from 'react';

interface LinkData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  url: string;
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
      // Internal anchor
      document.querySelector(link.url)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // External link
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article
      className={`group glass-card cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
        isHovered ? 'glass-card-hover' : ''
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
        <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-100 to-stone-200 flex items-center justify-center text-stone-700 group-hover:scale-110 transition-transform duration-300 glass-icon">
          {link.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-stone-800 text-base mb-0.5 group-hover:text-amber-800 transition-colors duration-300">
            {link.title}
          </h3>
          <p className="text-stone-500 text-sm font-light">
            {link.subtitle}
          </p>
        </div>
        
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
        </div>
      </div>
    </article>
  );
};
