import React from 'react';
import { Clock, Star } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  currentTime: Date;
}

export const Header: React.FC<HeaderProps> = ({ currentTime }) => {
  return (
    <header className="relative z-10 text-center pt-16 pb-12 animate-fade-in">      
      {/* Logo Image */}
      <div className="mb-6">
        <Image 
        src="/logo-esse.png" 
        alt="Essential Kopi Logo" 
        width={400} 
        height={400}
        className="mx-auto drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
        />      
      </div>
      
      <p className="text-lg text-stone-600 mb-6 font-light max-w-md mx-auto">
        Premium coffee for essential moments
      </p>
      
      <div className="flex items-center justify-center gap-6 text-sm text-stone-500">
        <div className="flex items-center gap-2 glass-card-sm px-3 py-1.5">
          <Clock className="w-4 h-4" />
          <time dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleTimeString('id-ID', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </time>
        </div>
        <div className="flex items-center gap-2 glass-card-sm px-3 py-1.5">
          <Star className="w-4 h-4 text-amber-600" />
          <span>5/5</span>
        </div>
      </div>
      
      {/* Optional: Add CSS for glass-card-sm if not defined elsewhere */}
      <style jsx>{`
        .glass-card-sm {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};