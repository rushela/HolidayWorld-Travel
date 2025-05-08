import React from 'react';
import { InstagramIcon } from 'lucide-react';
const instagramPosts = [{
  id: 1,
  image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  likes: 234,
  caption: 'Sunset at Mirissa Beach 🌅'
}, {
  id: 2,
  image: 'https://images.unsplash.com/photo-1588258147591-6e4ead7d1861?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  likes: 456,
  caption: 'Ancient temples of Anuradhapura ✨'
}, {
  id: 3,
  image: 'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  likes: 789,
  caption: 'Tea plantations in Nuwara Eliya 🍃'
}, {
  id: 4,
  image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  likes: 321,
  caption: 'Traditional Sri Lankan masks 🎭'
}, {
  id: 5,
  image: 'https://images.unsplash.com/photo-1625472603517-1b0dc72846ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  likes: 567,
  caption: 'Wildlife safari adventures 🐘'
}, {
  id: 6,
  image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  likes: 890,
  caption: 'Pristine beaches of the south coast 🏖️'
}];
export function InstagramFeed() {
  return <section className="py-24 bg-gray-50">
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
              <img src={post.image} alt={post.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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