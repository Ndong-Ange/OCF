import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import OrderModal from './OrderModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const handleOrderClick = () => {
    setOrderModal(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-black shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-crusty-yellow shadow-lg">
                <img 
                  src="/images/Logo/LOGO.jpg" 
                  alt="Logo O'Crusty" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="ml-3 text-2xl font-bold font-serif">
                <span className="text-white">O'</span>
                <span className="text-crusty-red">Crusty</span>{' '}
                <span className="text-crusty-yellow">Food</span>
              </span>
            </Link>

            {/* Navigation Bureau */}
            <div className="hidden md:flex space-x-8">
              {[
                ['Accueil', '/'],
                ['Menu', '/menu'],
                ['À Propos', '/about'],
                ['Contact', '/contact']
              ].map(([label, path]) => (
                <Link 
                  key={path} 
                  to={path}
                  className={`text-white hover:text-crusty-red transition-colors duration-300 font-medium ${
                    location.pathname === path ? 'text-crusty-red' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
              <button 
                onClick={handleOrderClick}
                className="bg-crusty-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Commander
              </button>
            </div>

            {/* Bouton Menu Mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isOpen && (
            <div className="md:hidden mt-4 bg-black rounded-lg shadow-lg p-4 absolute left-4 right-4">
              <div className="flex flex-col space-y-4">
                {[
                  ['Accueil', '/'],
                  ['Menu', '/menu'],
                  ['À Propos', '/about'],
                  ['Contact', '/contact']
                ].map(([label, path]) => (
                  <Link 
                    key={path} 
                    to={path}
                    className={`text-white hover:text-crusty-red transition-colors duration-300 font-medium text-center py-2 border-b border-gray-800 last:border-b-0 ${
                      location.pathname === path ? 'text-crusty-red' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <button 
                  onClick={handleOrderClick}
                  className="bg-crusty-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300 mt-2"
                >
                  Commander
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <OrderModal 
        isOpen={orderModal}
        onClose={() => setOrderModal(false)}
      />
    </>
  );
};

export default Navbar;