import React from 'react';
import { MapPinIcon, CalendarIcon, DollarSignIcon } from 'lucide-react';
const packages = [{
  id: 1,
  title: 'Cultural Triangle Explorer',
  image: 'https://images.unsplash.com/photo-1588258147591-6e4ead7d1861?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  duration: '7 Days',
  price: '$899',
  location: 'Kandy, Sigiriya, Anuradhapura'
}, {
  id: 2,
  title: 'Coastal Paradise Retreat',
  image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  duration: '5 Days',
  price: '$699',
  location: 'Mirissa, Unawatuna, Galle'
}, {
  id: 3,
  title: 'Tea Country Expedition',
  image: 'https://images.unsplash.com/photo-1568805242632-5f8c436d22b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  duration: '4 Days',
  price: '$599',
  location: 'Nuwara Eliya, Ella, Haputale'
}, {
  id: 4,
  title: 'Wildlife Safari Adventure',
  image: 'https://images.unsplash.com/photo-1607606116242-357a0bd4404f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  duration: '6 Days',
  price: '$799',
  location: 'Yala, Udawalawe, Minneriya'
}, {
  id: 5,
  title: 'Ayurvedic Wellness Journey',
  image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  duration: '8 Days',
  price: '$1099',
  location: 'Bentota, Beruwala, Hikkaduwa'
}, {
  id: 6,
  title: 'Adventure & Hiking Tour',
  image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  duration: '6 Days',
  price: '$749',
  location: "Adam's Peak, Knuckles, Horton Plains"
}];
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
          {packages.map(pkg => <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-64">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute top-4 right-4 bg-teal-500 text-white py-1 px-3 rounded-full text-sm font-medium">
                  {pkg.price}
                </div>
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
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            View All Packages
          </button>
        </div>
      </div>
    </section>;
}