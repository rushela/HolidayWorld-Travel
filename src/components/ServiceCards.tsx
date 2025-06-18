import React from 'react';
import { CompassIcon, HeadphonesIcon, MapIcon } from 'lucide-react';
const services = [{
  icon: <MapIcon size={32} />,
  title: 'Custom Itineraries',
  description: 'Personalized travel plans crafted around your interests, timeline, and travel style.',
  color: 'bg-gradient-to-br from-teal-500 to-teal-600'
}, {
  icon: <CompassIcon size={32} />,
  title: 'Local Guides',
  description: 'Expert local guides sharing authentic experiences and hidden gems of Sri Lanka.',
  color: 'bg-gradient-to-br from-amber-500 to-amber-600'
}, {
  icon: <HeadphonesIcon size={32} />,
  title: '24/7 Support',
  description: 'Round-the-clock assistance ensuring a smooth and worry-free journey.',
  color: 'bg-gradient-to-br from-sunset-400 to-sunset-500'
}];
export function ServiceCards() {
  return <section className="py-24 bg-white relative" id="services">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-2 h-full ${service.color} transition-all duration-300 group-hover:w-full opacity-10`} />
              <div className={`${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 relative">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed relative">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}