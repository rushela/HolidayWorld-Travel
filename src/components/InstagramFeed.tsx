import React from 'react';
import { InstagramIcon } from 'lucide-react';
const instagramPosts = [{
  id: 1,
  image: './src/assets/insta/1.jpeg',
  likes: 234,
  caption: 'elephant bath pinnawala'
}, {
  id: 2,
  image: './src/assets/insta/2.jpeg',
  likes: 456,
  caption: 'Minneriya national park'
}, {
  id: 3,
  image: './src/assets/insta/3.jpeg',
  likes: 789,
  caption: 'kandy tooth temple'
}, {
  id: 4,
  image: './src/assets/insta/4.jpeg',
  likes: 321,
  caption: 'dambulla cave temple'
}, {
  id: 5,
  image: './src/assets/insta/5.jpeg',
  likes: 567,
  caption: 'dambulla cave temple'
}, {
  id: 6,
  image: './src/assets/insta/6.jpeg',
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