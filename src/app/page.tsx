"use client"

import React, { useState, useEffect } from 'react';
import { Coffee, Instagram, MessageCircle, ShoppingBag } from 'lucide-react';
import { Header } from './components/sections/Header';
import { CoffeeMarquee } from './components/sections/CoffeeMarquee';
import { LinksSection } from './components/sections/LinksSection';
import MapLocation from './components/sections/MapLocation';
import { Footer } from './components/sections/Footer';

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const links = [
    {
      title: "Pesan Kopi Sekarang",
      subtitle: "Menu lengkap & delivery tersedia",
      icon: <Coffee className="w-5 h-5" />,
      url: "#order",
    },
    {
      title: "Instagram",
      subtitle: "@essential.kopi",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/hqessentialkopi",
    },
    {
      title: "WhatsApp Order",
      subtitle: "Chat langsung untuk pemesanan",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://wa.me/085559626858",
    },
    {
      title: "Toko Online",
      subtitle: "Belanja kopi premium",
      icon: <ShoppingBag className="w-5 h-5" />,
      url: "#shop",
    }
  ];

  const coffeeSpecialties = [
    "Single Origin", "House Blend", "Cold Brew", "Espresso", "Pour Over", "French Press"
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-card p-8">
          <Coffee className="w-8 h-8 text-amber-800 animate-pulse mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23964B00' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.1}px)`
        }}
        aria-hidden="true"
      />
      
      <Header currentTime={currentTime} />
      <CoffeeMarquee specialties={coffeeSpecialties} />
      <LinksSection 
        links={links} 
        hoveredCard={hoveredCard} 
        setHoveredCard={setHoveredCard} 
      />
      <MapLocation />
      <Footer />
    </main>
  );
}