import React, { useState } from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Clock, Coffee } from 'lucide-react';

// Type definitions
interface StoreLocation {
  id: number;
  name: string;
  address: string;
  phone: string;
  gmapsUrl: string;
  hours: string;
  description?: string;
}

export default function MapLocation() {
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation | null>(null);
  
  // Data lokasi Essential Kopi
  const storeLocations: StoreLocation[] = [
    {
      id: 1,
      name: "Essential Kopi Margahayu Raya",
      address: "Jl. Margahayu Raya, Bandung, Jawa Barat",
      phone: "+62 822-1234-5678",
      gmapsUrl: "https://www.google.com/maps/place/Essential+Kopi+Margahayu+Raya/@-6.9511084,107.6632684,1119m/data=!3m1!1e3!4m8!3m7!1s0x2e68e97acb853f83:0x4293a4b4d8099df0!8m2!3d-6.9511084!4d107.6658433!9m1!1b1!16s%2Fg%2F11x255mvt6?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
      hours: "07:00 - 22:00",
      description: "Main store with specialty coffee and cozy atmosphere"
    }
  ];

  const openDirections = (location: StoreLocation) => {
    // Extract coordinates from the Google Maps URL for directions
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Essential+Kopi+Margahayu+Raya,Bandung`;
    window.open(directionsUrl, '_blank');
  };

  const openLocationInMaps = (location: StoreLocation) => {
    window.open(location.gmapsUrl, '_blank');
  };

  const callStore = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <section 
      className="relative z-10 max-w-sm mx-auto px-6 mb-16"
      aria-label="Store locations"
    >
      <div className="glass-card overflow-hidden">
        <header className="p-4 border-b border-white/20">
          <h2 className="font-medium text-stone-800 flex items-center gap-2 text-base">
            <Coffee className="w-4 h-4 text-amber-700" />
            Lokasi Kami
          </h2>
          <p className="text-sm text-stone-500 font-light mt-1">Kunjungi Kami!</p>
        </header>
        
        {/* Embedded Google Maps */}
        <div className="relative h-64 overflow-hidden rounded-t-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8835419445896!2d107.66326841475393!3d-6.951108469543071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e97acb853f83%3A0x4293a4b4d8099df0!2sEssential%20Kopi%20Margahayu%20Raya!5e0!3m2!1sen!2sid!4v1694123456789!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Essential Kopi Margahayu Raya Location"
          />
          
          
          {/* Quick actions overlay */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              onClick={() => openLocationInMaps(storeLocations[0])}
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
              title="Open in Google Maps"
            >
              <ExternalLink className="w-4 h-4 text-stone-700" />
            </button>
            <button
              onClick={() => openDirections(storeLocations[0])}
              className="p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg transition-colors"   
              title="Get Directions"
            >
              <Navigation className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Store Details */}
        <div className="p-4">
          <div className="space-y-3 mb-4">
            {storeLocations.map((location) => (
              <div
                key={location.id}
                className="p-4 rounded-lg bg-white/60 border border-white/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-stone-800 text-sm font-medium mb-1">
                      {location.name}
                    </h3>
                    <p className="text-stone-600 text-xs mb-2 leading-relaxed">
                      {location.address}
                    </p>
                    {location.description && (
                      <p className="text-stone-500 text-xs mb-2 italic">
                        {location.description}
                      </p>
                    )}
                    <div className="flex items-center gap-1 text-amber-600 text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      {location.hours}
                    </div>
                  </div>
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles untuk glass effect */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .glass-button {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          padding: 12px;
          font-weight: 500;
          color: #1c1917;
          transition: all 0.2s ease;
        }
        
        .glass-button:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}