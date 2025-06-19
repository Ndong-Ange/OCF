import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
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
            </div>
            <p className="text-gray-400 mb-4">
              Des délices croustillants dans chaque bouchée. Découvrez des saveurs authentiques préparées avec amour et tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-crusty-red hover:text-crusty-yellow transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-crusty-red hover:text-crusty-yellow transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-crusty-red hover:text-crusty-yellow transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-crusty-red font-serif">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                ['Accueil', '/'],
                ['Menu', '/menu'],
                ['À Propos', '/about'],
                ['Contact', '/contact']
              ].map(([label, path]) => (
                <li key={path}>
                  <Link 
                    to={path}
                    className="text-gray-400 hover:text-crusty-yellow transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-crusty-red font-serif">Horaires d'Ouverture</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Lundi - Vendredi</span>
                <span className="text-crusty-yellow">11h - 22h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Samedi</span>
                <span className="text-crusty-yellow">10h - 23h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Dimanche</span>
                <span className="text-crusty-yellow">10h - 23h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-crusty-red font-serif">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 rounded-l-md focus:outline-none bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
              />
              <button 
                type="submit" 
                className="bg-crusty-red text-white px-4 py-2 rounded-r-md font-medium hover:bg-red-700 transition-colors duration-300"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} O'Crusty Food. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;