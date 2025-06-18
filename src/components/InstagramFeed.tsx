import React from 'react';
import { InstagramIcon } from 'lucide-react';
import insta1 from '../assets/insta/1.jpeg';
import insta2 from '../assets/insta/2.jpeg';
import insta3 from '../assets/insta/3.jpeg';
import insta4 from '../assets/insta/4.jpeg';
import insta5 from '../assets/insta/5.jpeg';
import insta6 from '../assets/insta/6.jpeg';
const instagramPosts = [{
  id: 1,
  image: insta1,
  likes: 234,
  caption: 'elephant bath pinnawala'
}, {
  id: 2,
  image: insta2,
  likes: 456,
  caption: 'Minneriya national park'
}, {
  id: 3,
  image: insta3,
  likes: 789,
  caption: 'kandy tooth temple'
}, {
  id: 4,
  image: insta4,
  likes: 321,
  caption: 'dambulla cave temple'
}, {
  id: 5,
  image: insta5,
  likes: 567,
  caption: 'dambulla cave temple'
}, {
  id: 6,
  image: insta6,
  likes: 890,
  caption: 'diyaluma upper water fall'
}];
export function InstagramFeed() {
  return <section className="py-24 bg-gray-50" id="instagram">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Follow Our Adventures
          </h2>
          <a href="https://www.instagram.com/holidayworldt?igsh=MXczZjF1YWtwOXp3dQ==" className="inline-flex items-center text-sunset-400 hover:text-sunset-500 transition-colors duration-300">
            <InstagramIcon size={24} className="mr-2" />
            @holidayworldt
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map(post => <div key={post.id} className="group relative rounded-2xl overflow-hidden aspect-square">
              <img 
                src={post.image} 
                alt={post.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                style={post.id === 4 || post.id === 5 ? { objectPosition: 'center top' } : {}} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-light">{post.caption}</p>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/holidayworldt?igsh=MXczZjF1YWtwOXp3dQ==" className="inline-flex items-center border-2 border-sunset-400 text-sunset-400 hover:bg-sunset-400 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            View More on Instagram
          </a>
        </div>
      </div>
    </section>;
}