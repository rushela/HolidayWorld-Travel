import { FacebookIcon, InstagramIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Holiday<span className="text-teal-400">World</span>
            </h3>
            <p className="mb-6 text-gray-300">
              Your trusted guide to exploring the wonders of Sri Lanka. We
              create unforgettable travel experiences tailored to your
              preferences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16X5aVdcHe/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-teal-500 p-2 rounded-full transition-colors duration-300">
                <FacebookIcon size={20} />
              </a>
              <a href="https://www.instagram.com/holidayworldt?igsh=MXczZjF1YWtwOXp3dQ==" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-teal-500 p-2 rounded-full transition-colors duration-300">
                <InstagramIcon size={20} />
              </a>
              {/*
              <a href="#" className="bg-gray-700 hover:bg-teal-500 p-2 rounded-full transition-colors duration-300">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-teal-500 p-2 rounded-full transition-colors duration-300">
                <YoutubeIcon size={20} />
              </a>
              */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Packages', 'Destinations', 'Blog', 'Contact'].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              {['Colombo', 'Kandy', 'Galle', 'Ella', 'Sigiriya', 'Trincomalee', 'Nuwara Eliya'].map(item => <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <p className="flex items-start">
                <PhoneIcon size={20} className="mr-3 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">+94 77 391 4455</span>
              </p>
              <p className="flex items-start">
                <MailIcon size={20} className="mr-3 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">holidayworldt@gmail.com</span>
              </p>
              <div>
                {/* Newsletter subscription hidden as requested
                <form className="flex">
                  <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg flex-grow text-gray-800 focus:outline-none" />
                  <button type="submit" className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-r-lg transition-colors duration-300">
                    Go
                  </button>
                </form>
                */}
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Holiday World. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-teal-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}