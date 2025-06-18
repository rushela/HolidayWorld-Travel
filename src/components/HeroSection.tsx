import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
export function HeroSection() {
  const [searchFocused, setSearchFocused] = useState(false);
  return <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Video Background */}
      <div className="absolute inset-0">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
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
        {/* Search Bar */}
        {/*
        <div className={`w-full max-w-4xl bg-white rounded-2xl p-4 transition-all duration-300 ${searchFocused ? 'shadow-2xl transform -translate-y-1' : 'shadow-xl'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Where to?" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500" onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="date" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500" onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500" onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}>
                <option value="">Travelers</option>
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4+ Travelers</option>
              </select>
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center">
              <Search size={20} className="mr-2" />
              Search
            </button>
          </div>
        </div>
        */}
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