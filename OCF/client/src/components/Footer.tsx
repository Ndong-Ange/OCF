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
                <span className="text-white">Ô</span>
                <span className="text-crusty-red">Crusty</span>{' '}
                <span className="text-crusty-yellow">Food</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Restaurant de cuisine rapide et fraîche à Agde, spécialisé dans les burgers gourmets, 
              tacos savoureux et sandwichs croustillants. Qualité et fraîcheur garanties !
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/crustyfood1" target="_blank" rel="noopener noreferrer" className="text-crusty-red hover:text-crusty-yellow transition-colors duration-300">
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
                <span className="text-gray-400">Lundi - Dimanche</span>
                <span className="text-crusty-yellow">18h - 22h</span>
              </li>
              <li className="text-sm text-gray-500 mt-2">
                Ouvert 7j/7 même les jours fériés
              </li>
              <li className="text-sm text-crusty-yellow mt-2">
                🚚 Livraison disponible
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-crusty-red font-serif">Contact & Livraison</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 1 Rue des Tamaris</p>
              <p>34300 Agde, France</p>
              <p>📞 +33 6 51 67 64 10</p>
              <p>📞 +33 7 72 41 49 91</p>
            </div>
            
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ô Crusty Food - Agde. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Cuisine rapide et fraîche • Burgers • Tacos • Sandwichs • Livraison 7j/7
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;