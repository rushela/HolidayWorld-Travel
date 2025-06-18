import React from 'react';
import { MapPinIcon, CalendarIcon } from 'lucide-react';
import pkg1 from '../assets/Packages/12.jpeg';
import pkg2 from '../assets/Packages/8.jpeg';
import pkg3 from '../assets/Packages/9.jpeg';
import pkg4 from '../assets/Packages/10.jpeg';
import pkg5 from '../assets/Packages/11.jpeg';
import pkg6 from '../assets/Packages/13.jpeg';
const packages = [{
  id: 1,
  title: 'Cultural Triangle Explorer',
  image: pkg1,
  duration: '7 Days',
  price: '$899',
  location: 'Kandy, Sigiriya, Anuradhapura'
}, {
  id: 2,
  title: 'Coastal Paradise Retreat',
  image: pkg2,
  duration: '5 Days',
  price: '$699',
  location: 'Mirissa, Unawatuna, Galle'
}, {
  id: 3,
  title: 'Tea Country Expedition',
  image: pkg3,
  duration: '4 Days',
  price: '$599',
  location: 'Nuwara Eliya, Ella, Haputale'
}, {
  id: 4,
  title: 'Wildlife Safari Adventure',
  image: pkg4,
  duration: '6 Days',
  price: '$799',
  location: 'Yala, Udawalawe, Minneriya'
}, {
  id: 5,
  title: 'nine arche',
  image: pkg5,
  duration: '8 Days',
  price: '$1099',
  location: 'Bentota, Beruwala, Hikkaduwa'
}, {
  id: 6,
  title: 'Adventure & Hiking Tour',
  image: pkg6,
  duration: '6 Days',
  price: '$749',
  location: "Adam's Peak, Knuckles, Horton Plains"
}];
const tripAdvisorUrl = 'https://www.tripadvisor.co.uk/Attraction_Review-g2674028-d18769629-Reviews-HOLIDAY_WORLD_TRAVEL_SRI_LANKA-Ragama_Western_Province.html';
export function PackageGrid() {
  return <section className="py-20 bg-gray-50" id="packages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Travel Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of Sri Lankan experiences,
            designed to showcase the best this beautiful island has to offer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  style={idx === 1 || idx === 2 ? { objectPosition: 'center 20%' } : idx === 5 ? { objectPosition: 'center 40%' } : { objectPosition: 'center top' }} 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPinIcon size={18} className="mr-2 text-coral-500" />
                  <span className="text-sm">{pkg.location}</span>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <CalendarIcon size={18} className="mr-2 text-coral-500" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                <a href={tripAdvisorUrl} target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md transition-colors duration-300">
                    View Details
                  </button>
                </a>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href={tripAdvisorUrl} target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
              View All Packages
            </button>
          </a>
        </div>
      </div>
    </section>;
}