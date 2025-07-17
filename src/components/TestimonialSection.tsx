import { useEffect, useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import ralphImg from '../assets/feedbacks/ralph.png';
import feedback2Img from '../assets/feedbacks/2.png';
import feedback3Img from '../assets/feedbacks/3.png';
import feedback4Img from '../assets/feedbacks/4.png';
import feedback5Img from '../assets/feedbacks/5.png';
const testimonials = [{
  id: 1,
  name: 'Ralph H',
  location: 'Netherlands',
  image: ralphImg,
  text: 'We had the absolute pleasure of having Harsha as our private guide during our journey through Sri Lanka — and it truly made our honeymoon unforgettable...',
  rating: 5
}, {
  id: 2,
  name: 'Marjolein',
  location: 'Rotterdam, The Netherlands',
  image: feedback2Img,
  text: 'Harsha is truly the best tour guide we could have ever wished for on our first trip to Sri Lanka...',
  rating: 5
}, {
  id: 3,
  name: 'Moni G',
  location: 'Germany',
  image: feedback3Img,
  text: "I was very lucky and was allowed to travel with Harsha for 10 days.I have travelled a lot and had experiences with very good guides - Harsha topped them all!!!",
  rating: 5
}, {
  id: 4,
  name: 'Joshua R',
  location: 'United Kingdom',
  image: feedback4Img,
  text: "Harsha is a truly incredible person - his knowledge, passion and love for Sri Lanka is exceptional and clear to see...",
  rating: 5
}, {
  id: 5,
  name: 'GlobeTrotting642026',
  location: 'United Kingdom',
  image: feedback5Img,
  text: 'Our first visit we are already longing to return . Harsha our professional tour guide and Driver accompanied us throughout our entire time of the trip ...',
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
              {testimonials.map(testimonial => {
                const cardContent = (
                  <>
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-teal-100">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} size={20} className="fill-current text-yellow-400" />)}
                    </div>
                    {testimonial.id === 1 && (
                      <div className="mb-3">
                        <span className="font-bold text-lg block">Exceptional Private Tour with Knowledgeable and Caring Guide</span>
                      </div>
                    )}
                    {testimonial.id === 2 && (
                      <div className="mb-3">
                        <span className="font-bold text-lg block">The BEST Honeymoon trip to Sri Lanka - thank you Harsha!!</span>
                      </div>
                    )}
                    {testimonial.id === 3 && (
                      <div className="mb-3">
                        <span className="font-bold text-lg block">DANKE Harsha! A PERFECT HOLIDAY - it couldn't be better!</span>
                      </div>
                    )}
                    {testimonial.id === 4 && (
                      <div className="mb-3">
                        <span className="font-bold text-lg block">Harsha - Sri Lanka’s Best Tour Guide</span>
                      </div>
                    )}
                    {testimonial.id === 5 && (
                      <div className="mb-3">
                        <span className="font-bold text-lg block">Sri Lanka 🇱🇰 invigorating, fascinating history & culturally exciting</span>
                      </div>
                    )}
                    <blockquote className="text-gray-600 italic mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </>
                );
                return (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    {testimonial.id === 1 ? (
                      <a href="https://www.tripadvisor.co.uk/ShowUserReviews-g2674028-d18769629-r1017448892-HOLIDAY_WORLD_TRAVEL_SRI_LANKA-Ragama_Western_Province.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-200 hover:scale-105 focus:scale-105">
                        {cardContent}
                      </a>
                    ) : testimonial.id === 2 ? (
                      <a href="https://www.tripadvisor.co.uk/ShowUserReviews-g2674028-d18769629-r1017513969-HOLIDAY_WORLD_TRAVEL_SRI_LANKA-Ragama_Western_Province.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-200 hover:scale-105 focus:scale-105">
                        {cardContent}
                      </a>
                    ) : testimonial.id === 3 ? (
                      <a href="https://www.tripadvisor.co.uk/ShowUserReviews-g2674028-d18769629-r1009899410-HOLIDAY_WORLD_TRAVEL_SRI_LANKA-Ragama_Western_Province.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-200 hover:scale-105 focus:scale-105">
                        {cardContent}
                      </a>
                    ) : testimonial.id === 4 ? (
                      <a href="https://www.tripadvisor.co.uk/ShowUserReviews-g2674028-d18769629-r1006251538-HOLIDAY_WORLD_TRAVEL_SRI_LANKA-Ragama_Western_Province.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-200 hover:scale-105 focus:scale-105">
                        {cardContent}
                      </a>
                    ) : testimonial.id === 5 ? (
                      <a href="https://www.tripadvisor.co.uk/ShowUserReviews-g2674028-d18769629-r997881350-HOLIDAY_WORLD_TRAVEL_SRI_LANKA-Ragama_Western_Province.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-200 hover:scale-105 focus:scale-105">
                        {cardContent}
                      </a>
                    ) : (
                      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        {cardContent}
                      </div>
                    )}
                  </div>
                );
              })}
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