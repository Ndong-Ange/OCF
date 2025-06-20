import React from 'react';
import { X, Truck, Smartphone, Star } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, itemName }) => {
  if (!isOpen) return null;

  // Liens de commande réels pour Agde
  const orderLinks = {
    uberEats: 'https://www.ubereats.com/fr/store/ocrusty-food/restaurant-id',
    phone1: 'tel:+33651676410',
    phone2: 'tel:+33772414991'
  };

  const handleOrderClick = (platform: string, url: string) => {
    console.log(`Commande via ${platform} pour: ${itemName || 'Menu général'}`);
    
    if (url.startsWith('tel:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-crusty-red mb-2 font-serif">
            Commander {itemName && `- ${itemName}`}
          </h3>
          <p className="text-crusty-black opacity-80">
            Choisissez votre mode de commande
          </p>
          <div className="flex items-center justify-center mt-2 text-sm text-crusty-black opacity-70">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span>4.6/5 sur Uber Eats</span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleOrderClick('Uber Eats', orderLinks.uberEats)}
            className="w-full bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-3"
          >
            <Truck className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">Commander sur Uber Eats</div>
              <div className="text-sm opacity-80">Livraison rapide • Note 4.6/5</div>
            </div>
          </button>

          <div className="text-center text-sm text-crusty-black opacity-60">
            ou appelez directement
          </div>

          <button
            onClick={() => handleOrderClick('Téléphone 1', orderLinks.phone1)}
            className="w-full bg-crusty-red text-white p-4 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-3"
          >
            <Smartphone className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">+33 6 51 67 64 10</div>
              <div className="text-sm opacity-80">Commande par téléphone</div>
            </div>
          </button>

          <button
            onClick={() => handleOrderClick('Téléphone 2', orderLinks.phone2)}
            className="w-full bg-crusty-red text-white p-4 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-3"
          >
            <Smartphone className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">+33 7 72 41 49 91</div>
              <div className="text-sm opacity-80">Ligne alternative</div>
            </div>
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <div className="p-4 bg-crusty-yellow bg-opacity-20 rounded-lg">
            <p className="text-sm text-crusty-black text-center font-semibold">
              📍 1 Rue des Tamaris, 34300 Agde
            </p>
          </div>
          
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700 text-center">
              🕐 <strong>Ouvert 7j/7 :</strong> 18h00 - 22h00 (même jours fériés)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;