import { MapPinIcon } from 'lucide-react';
import pkg1 from '../assets/Packages/12.jpeg';
import pkg2 from '../assets/Packages/8.jpeg';
import pkg3 from '../assets/Packages/9.jpeg';
import pkg4 from '../assets/Packages/10.jpeg';
import pkg5 from '../assets/Packages/11.jpeg';
import pkg6 from '../assets/Packages/13.jpeg';
import tripadLogo from '../assets/tripad.png';
const packages = [{
  id: 1,
  title: 'Cultural Triangle Explorer',
  image: pkg1,
  location: 'Dambulla, Sigiriya, Anuradhapura, Polonnaruwa'
}, {
  id: 2,
  title: 'Coastal Paradise Retreat',
  image: pkg2,
  location: 'Trincomalee, pasikuda, Arugambay, Mirissa, Unawatuna, Hikkaduwa'
}, {
  id: 3,
  title: 'Tea Country Expedition',
  image: pkg3,
  duration: '4 Days',
  price: '$599',
  location: 'Nuwaraeliya, Hatton, Haputale'
}, {
  id: 4,
  title: 'Wildlife Safari Adventure',
  image: pkg4,
  duration: '6 Days',
  price: '$799',
  location: 'Minneriya, Udawalawa, Yala, Wilpaththu'
}, {
  id: 5,
  title: 'nine arche',
  image: pkg5,
  duration: '8 Days',
  price: '$1099',
  location: 'Ella'
}, {
  id: 6,
  title: 'Adventure & Hiking Tour',
  image: pkg6,
  duration: '6 Days',
  price: '$749',
  location: "Pekoe trail, Little Adams’s peak, Horton plains, Ella rock, Upper diyaluma water falls"
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
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href={tripAdvisorUrl} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center gap-3 border-2 border-[#00AF87] bg-[#00AF87] text-white hover:bg-[#008f6e] hover:border-[#008f6e] px-4 py-1.5 rounded-full font-semibold transition-all duration-300 mx-auto text-base shadow-md hover:shadow-xl transform hover:scale-105">
            <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[#00AF87]">
              <img src={tripadLogo} alt="TripAdvisor Logo" className="h-8 w-8 object-contain" />
            </span>
            View more on Tripadvisor
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-5 h-5 ml-2 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          </a>
        </div>
      </div>
    </section>;
}
