import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const slides = [{
  id: 1,
  image: 'src/assets/sigiriya.jpg',
  title: "Discover Sri Lanka's Natural Beauty",
  subtitle: 'Pristine beaches, lush mountains and ancient temples await'
}, {
  id: 2,
  image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  title: 'Experience Rich Cultural Heritage',
  subtitle: "Immerse yourself in Sri Lanka's vibrant traditions"
}, {
  id: 3,
  image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  title: 'Adventure in Paradise',
  subtitle: 'Thrilling experiences in breathtaking landscapes'
}];
export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${slide.image})`
      }}>
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 transform transition-all duration-700 translate-y-0 opacity-100">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                {slide.subtitle}
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
                Plan Your Journey
              </button>
            </div>
          </div>
        </div>)}
      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-300" onClick={prevSlide}>
        <ChevronLeftIcon size={24} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-300" onClick={nextSlide}>
        <ChevronRightIcon size={24} />
      </button>
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'}`} onClick={() => setCurrentSlide(index)} />)}
      </div>
    </section>;
}