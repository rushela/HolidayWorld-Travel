import React from 'react';
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react';
const blogPosts = [{
  id: 1,
  title: 'Top 10 Beaches in Southern Sri Lanka',
  excerpt: "Discover the pristine shores and hidden coves along Sri Lanka's southern coastline.",
  image: 'https://images.unsplash.com/photo-1586861256632-6dfb3a858f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  date: 'June 15, 2023',
  author: 'Priya Mendis',
  category: 'Beaches'
}, {
  id: 2,
  title: "A Foodie's Guide to Sri Lankan Cuisine",
  excerpt: 'Explore the rich flavors and spices that make Sri Lankan food a culinary adventure.',
  image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  date: 'May 28, 2023',
  author: 'Dinesh Kumar',
  category: 'Food'
}, {
  id: 3,
  title: "Hiking Adam's Peak: What to Expect",
  excerpt: "Prepare for this spiritual journey with our comprehensive guide to Adam's Peak.",
  image: 'https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  date: 'April 10, 2023',
  author: 'Sarah Johnson',
  category: 'Adventure'
}, {
  id: 4,
  title: "Sri Lanka's Ancient Cities: A Historical Tour",
  excerpt: "Step back in time and explore the fascinating ruins of Sri Lanka's ancient kingdoms.",
  image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  date: 'March 22, 2023',
  author: 'Michael Chen',
  category: 'History'
}, {
  id: 5,
  title: 'Wildlife Spotting: Safari Guide for Yala National Park',
  excerpt: "Maximize your chances of spotting leopards and other wildlife in Sri Lanka's premier national park.",
  image: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  date: 'February 14, 2023',
  author: 'Elena Rodriguez',
  category: 'Wildlife'
}];
export function BlogSection() {
  return <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travel Inspiration & Tips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get inspired for your next adventure with our latest articles,
            guides, and travel stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map(post => <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute top-4 left-4 bg-coral-500 text-white text-xs font-medium py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <CalendarIcon size={14} className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <UserIcon size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-teal-500 font-medium hover:text-teal-700 transition-colors duration-300">
                  Read More <ArrowRightIcon size={16} className="ml-2" />
                </a>
              </div>
            </div>)}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(3, 5).map(post => <div key={post.id} className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="md:w-1/3 h-48 md:h-auto">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <CalendarIcon size={14} className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <span className="bg-coral-500 text-white text-xs font-medium py-1 px-2 rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-teal-500 font-medium hover:text-teal-700 transition-colors duration-300">
                  Read More <ArrowRightIcon size={16} className="ml-2" />
                </a>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>;
}