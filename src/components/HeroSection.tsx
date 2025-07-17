import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import heroImage1 from '../assets/9arch.jpg';
import heroImage2 from '../assets/beach.jpg';
import heroImage3 from '../assets/sigiri.jpg';
import heroImage4 from '../assets/tea.jpg';

interface HeroSectionProps {
  onBookingClick?: () => void;
}

export function HeroSection({ onBookingClick }: HeroSectionProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Cycle through hero images every 3 seconds
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  // Scroll to hero section on mount
  useEffect(() => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const selectedHeroImage = heroImages[currentIndex];
  
  const handleBookNowClick = () => {
    if (onBookingClick) {
      onBookingClick();
    }
  };
  
  return <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src={selectedHeroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-6 animation-fade-in">
          Discover Sri Lanka with Holiday World
        </h1>
        <p className="text-xl md:text-2xl text-white text-center mb-12 max-w-3xl">
          Experience the magic of paradise island through authentic local
          experiences
        </p>
        {/* Booking Bar */}
        {false && (
        <div className={`w-full max-w-4xl bg-white rounded-3xl p-4 shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-0`}>
          <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 mr-0 md:mr-2 border border-gray-200">
            <MapPin className="text-gray-400 mr-3" size={20} />
            <input
              type="text"
              placeholder="Select Destination"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-sm font-medium"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
          <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 mr-0 md:mr-2 border border-gray-200">
            <Calendar className="text-gray-400 mr-3" size={20} />
            <input
              type="date"
              min={today}
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-sm font-medium"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
          <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 mr-0 md:mr-2 border border-gray-200">
            <Users className="text-gray-400 mr-3" size={20} />
            <select
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-sm font-medium"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            >
              <option value="">Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
          <button
            onClick={handleBookNowClick}
            className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-200 ml-0 md:ml-2 w-full md:w-auto text-sm"
            style={{ minWidth: 180 }}
          >
            <Search size={18} className="mr-2" />
            Check Availability
          </button>
        </div>
        )}
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
      <style >{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animation-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>;
}