import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from '../assets/logo.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <span className={`text-2xl font-bold ${scrolled ? 'text-teal-600' : 'text-white'}`}>
            Holiday<span className="text-coral-500">World</span> Travel
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          {['Home', 'Services', 'About', 'Packages', 'Destinations', 'Instagram', 'Testimonials', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className={`transition-colors duration-300 hover:text-teal-500 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                {item}
              </a>)}
        </nav>
        <button className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {['Home', 'Services', 'About', 'Packages', 'Destinations', 'Instagram', 'Testimonials', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-800 py-2 border-b border-gray-100 hover:text-teal-500 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>)}
            </nav>
          </div>
        </div>}
    </header>;
}