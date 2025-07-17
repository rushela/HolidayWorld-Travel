import { MapIcon, SunIcon, HeartIcon, GlobeIcon } from 'lucide-react';
import about4 from '../assets/insta/4.jpeg';
import about5 from '../assets/insta/5.jpeg';
import about6 from '../assets/insta/6.jpeg';
import chubbyJpeg from '../assets/chubby.jpeg';

export function AboutSection() {
  return <section className="py-20 bg-gray-50 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Holiday World
              </h2>
              <p className="text-gray-600 mb-6">
              <b>Harsha Perera - Licensed Tour Guide Lecturer and owner of Holiday World Sri Lanka</b>

              Welcome to Sri Lanka! I'm Harsha Perera, a government-licensed tour guide 
              lecturer with years of experience in crafting unforgettable journeys across 
              our island paradise.
              </p>
              <p className="text-gray-600 mb-8">
              As part of Holiday World Sri Lanka, founded in 2015, I specialize in 
              personalized tour packages, excursions, and travel planning — including hotels, 
              transportation, activities, and local experiences tailored to your needs.
              </p>
              <p className="text-gray-600 mb-8">
              Our mission is to promote authentic, responsible tourism that supports local 
              communities and protects our rich cultural and natural heritage. From iconic 
              landmarks to hidden local gems, we'll help you experience the real Sri Lanka.
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
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={chubbyJpeg} alt="About Harsha" className="w-full h-full object-cover object-top" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden mt-8">
              <img src={about4} alt="About 2" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={about5} alt="About 3" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden mt-8">
              <img src={about6} alt="About 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}