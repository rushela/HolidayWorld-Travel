import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon } from 'lucide-react';
export function ContactSection() {
  return <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our travel packages or need a custom itinerary?
            Get in touch with our friendly team.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="lg:w-1/2 p-8 lg:p-12 bg-teal-600 text-white">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <MapPinIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Office</h4>
                  <p className="opacity-90">
                    42 Beach Road, Colombo 03
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <PhoneIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="opacity-90">+94 11 234 5678</p>
                  <p className="opacity-90">+94 77 123 4567 (WhatsApp)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <MailIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="opacity-90">info@holidayworld.lk</p>
                  <p className="opacity-90">bookings@holidayworld.lk</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <ClockIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="opacity-90">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="opacity-90">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="How can we help you?" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Tell us about your travel plans..."></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex justify-center items-center">
                Send Message <SendIcon size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}