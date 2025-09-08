import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 text-center pb-12">
      <div className="flex items-center justify-center gap-2 text-stone-500 mb-3">
        <Heart className="w-4 h-4 text-amber-600" />
        <span className="text-sm font-light">Made with passion</span>
      </div>
      <p className="text-xs text-stone-400 font-light">
        © 2024 Essential Kopi. All rights reserved.
      </p>
    </footer>
  );
};