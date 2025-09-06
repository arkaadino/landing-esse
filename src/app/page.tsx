"use client"

import React, { useState, useEffect } from 'react';
import { Coffee, Instagram, MessageCircle, ShoppingBag, MapPin, Clock, Star, Heart, Sparkles } from 'lucide-react';

const EssentialsCoffeeLanding = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [coffeeBeansCount, setCoffeeBeansCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoffeeBeansCount(prev => (prev + 1) % 20);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const links = [
    {
      title: "Pesan Kopi Sekarang",
      subtitle: "Menu lengkap & delivery tersedia",
      icon: <Coffee className="w-6 h-6" />,
      url: "#order",
      gradient: "from-amber-500 to-orange-600",
      hoverGradient: "from-amber-400 to-orange-500"
    },
    {
      title: "Instagram",
      subtitle: "@hqessentialkopi - Follow untuk update terbaru",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/hqessentialkopi",
      gradient: "from-pink-500 to-purple-600",
      hoverGradient: "from-pink-400 to-purple-500"
    },
    {
      title: "WhatsApp Order",
      subtitle: "Chat langsung untuk pemesanan",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://wa.me/yourwhatsappnumber",
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Toko Online",
      subtitle: "Belanja kopi premium & merchandise",
      icon: <ShoppingBag className="w-6 h-6" />,
      url: "#shop",
      gradient: "from-blue-500 to-indigo-600",
      hoverGradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Lokasi & Jam Buka",
      subtitle: "Temukan outlet terdekat",
      icon: <MapPin className="w-6 h-6" />,
      url: "#location",
      gradient: "from-red-500 to-rose-600",
      hoverGradient: "from-red-400 to-rose-500"
    }
  ];

  const coffeeSpecialties = [
    "Arabica Premium", "Robusta Local", "Cold Brew", "Espresso Blend"
  ];

  const FloatingCoffeeBeans = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-amber-600 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <FloatingCoffeeBeans />
      
      {/* Header dengan animasi */}
      <div className="relative z-10 text-center pt-12 pb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
          <Coffee className="w-12 h-12 text-white animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
          Essential Kopi
        </h1>
        
        <p className="text-lg text-amber-800 mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Kopi Premium untuk Hidup Esensial
          <Sparkles className="w-5 h-5 text-yellow-500" />
        </p>
        
        <div className="flex items-center justify-center gap-4 text-sm text-amber-700">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {currentTime.toLocaleTimeString('id-ID')}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            4.9/5 Rating
          </div>
        </div>
      </div>

      {/* Coffee specialties ticker */}
      <div className="relative z-10 mb-8 overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 py-3">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...coffeeSpecialties, ...coffeeSpecialties].map((specialty, i) => (
            <span key={i} className="text-white font-semibold mx-8 flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Main Links */}
      <div className="relative z-10 max-w-md mx-auto px-4 space-y-4 mb-12">
        {links.map((link, index) => (
          <div
            key={index}
            className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden ${
              hoveredCard === index ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => window.open(link.url, '_blank')}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${hoveredCard === index ? link.hoverGradient : link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <div className="relative p-6 flex items-center space-x-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${link.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {link.subtitle}
                </p>
              </div>
              
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Hover effect border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-md mx-auto px-4 mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl font-bold text-amber-600 mb-1">1000+</div>
            <div className="text-xs text-gray-600">Pelanggan Setia</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl font-bold text-orange-600 mb-1">50+</div>
            <div className="text-xs text-gray-600">Varian Menu</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl font-bold text-red-600 mb-1">5+</div>
            <div className="text-xs text-gray-600">Outlet</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center pb-8">
        <div className="flex items-center justify-center gap-2 text-amber-700 mb-2">
          <Heart className="w-4 h-4 text-red-500" />
          <span className="text-sm">Made with love for coffee enthusiasts</span>
        </div>
        <p className="text-xs text-amber-600">© 2024 Essentials Kopi. Semua hak cipta dilindungi.</p>
      </div>

      {/* CSS untuk animasi scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EssentialsCoffeeLanding;