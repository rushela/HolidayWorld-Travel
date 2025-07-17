import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon } from 'lucide-react';
import { MessageCircleIcon } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const message = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;

  const isFormValid = form.name.trim() && form.email.trim() && form.subject.trim() && form.message.trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      setError('Please fill in all required fields.');
      setSuccess(false);
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xdkdkonr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    }
    setLoading(false);
  };

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
                  No 34 John keels houses <br />
                  Vihara Mawatha, Thewatta <br />
                  Ragama <br />
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
                  <p className="opacity-90">+94 77 391 4455 (Call/WhatsApp)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <MailIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="opacity-90">holidayworldt@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <ClockIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="opacity-90">
                    Monday - Sunday: 6:00 AM - 10:00 PM
                  </p>
                  <p className="opacity-90">WhatsApp 24/7 support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="How can we help you?" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Tell us about your travel plans..."></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex justify-center items-center" disabled={!isFormValid || loading}>
                {loading ? 'Sending...' : 'Send via Email'} <SendIcon size={18} className="ml-2" />
              </button>
            </form>
            <div className="flex gap-4 mt-4">
              <a
                href={`https://wa.me/94773914455?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full bg-teal-700 hover:bg-teal-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex justify-center items-center${!isFormValid ? ' opacity-60' : ''}`}
                tabIndex={!isFormValid ? -1 : 0}
                aria-disabled={!isFormValid}
              >
                Send via WhatsApp
                <MessageCircleIcon size={22} className="ml-2" />
              </a>
            </div>
            {error && <div className="text-red-600 mt-4 font-medium">{error}</div>}
            {success && <div className="text-green-600 mt-4 font-medium">Your message is ready to be sent!</div>}
          </div>
        </div>
      </div>
    </section>;
}
