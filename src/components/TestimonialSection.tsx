import React, { useEffect, useState, useRef, memo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Sarah Johnson',
  location: 'United Kingdom',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  text: 'Our trip to Sri Lanka with Holiday World was absolutely magical. The attention to detail and personalized service made all the difference. From tea plantations to pristine beaches, every moment was perfect.',
  rating: 5
}, {
  id: 2,
  name: 'Michael Chen',
  location: 'Australia',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  text: 'The wildlife safari exceeded all our expectations. Our guide was incredibly knowledgeable and made sure we had the best possible experience. We saw elephants, leopards, and so many beautiful birds!',
  rating: 5
}, {
  id: 3,
  name: 'Elena Rodriguez',
  location: 'Spain',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  text: "Holiday World created the perfect balance of adventure, culture, and relaxation. The cultural experiences were authentic and the accommodations were spectacular. I'll definitely be back!",
  rating: 5
}, {
  id: 4,
  name: 'David Müller',
  location: 'Germany',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  text: "From the moment we arrived, everything was taken care of. The local insights from our guide made this trip special - we experienced Sri Lanka in a way that wouldn't have been possible on our own.",
  rating: 5
}, {
  id: 5,
  name: 'Aiko Tanaka',
  location: 'Japan',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  text: 'The food tours and cooking classes were highlights of our trip. We learned so much about Sri Lankan cuisine and culture. Holiday World created memories that will last a lifetime.',
  rating: 5
}];
export function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 bg-teal-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of travelers who have explored Sri Lanka
            with Holiday World.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={slideRef}>
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
              {testimonials.map(testimonial => <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-teal-100">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} size={20} className="fill-current text-yellow-400" />)}
                    </div>
                    <blockquote className="text-gray-600 italic mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>)}
            </div>
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full shadow-lg p-3 text-teal-500 hover:text-teal-700 transition-colors duration-300" onClick={prevSlide}>
            <ChevronLeftIcon size={24} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full shadow-lg p-3 text-teal-500 hover:text-teal-700 transition-colors duration-300" onClick={nextSlide}>
            <ChevronRightIcon size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-teal-500 w-6' : 'bg-gray-300'}`} onClick={() => {
          setIsAnimating(true);
          setCurrentSlide(index);
          setTimeout(() => setIsAnimating(false), 500);
        }} />)}
        </div>
      </div>
    </section>;
}