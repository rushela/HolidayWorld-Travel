import React from 'react';
import { MapIcon, SunIcon, HeartIcon, GlobeIcon } from 'lucide-react';
export function AboutSection() {
  return <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Holiday World
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Holiday World has been the premier travel guide
              for exploring the wonders of Sri Lanka. Our expert team of local
              guides and travel enthusiasts are dedicated to creating
              unforgettable experiences that showcase the authentic beauty of
              our island paradise.
            </p>
            <p className="text-gray-600 mb-8">
              We believe in responsible tourism that benefits local communities
              while preserving Sri Lanka's natural beauty and cultural heritage.
              Each of our carefully crafted itineraries balances must-see
              attractions with hidden gems known only to locals.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-lg text-white mr-4">
                  <MapIcon size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Expert Guides</h3>
                  <p className="text-gray-600 text-sm">
                    Local knowledge and insights
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-coral-500 p-3 rounded-lg text-white mr-4">
                  <SunIcon size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Unique Experiences</h3>
                  <p className="text-gray-600 text-sm">
                    Beyond the typical tourist trail
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-coral-500 p-3 rounded-lg text-white mr-4">
                  <HeartIcon size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Personalized Service</h3>
                  <p className="text-gray-600 text-sm">
                    Tailored to your preferences
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-lg text-white mr-4">
                  <GlobeIcon size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Sustainable Tourism</h3>
                  <p className="text-gray-600 text-sm">
                    Responsible travel practices
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555732027-698f6fc4e3e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Sri Lankan landscape" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden mt-8">
              <img src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Local culture" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Beach sunset" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden mt-8">
              <img src="https://images.unsplash.com/photo-1625472603517-1b0dc72846ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wildlife safari" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}