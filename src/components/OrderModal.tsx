import React from 'react';
import { X, Truck, Smartphone } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, itemName }) => {
  if (!isOpen) return null;

  // Remplacez ces liens par vos vrais liens de restaurant
  const orderLinks = {
    uberEats: 'https://www.ubereats.com/fr/store/ocrusty-food/restaurant-id',
    deliveroo: 'https://deliveroo.fr/fr/menu/paris/ocrusty-food',
    // Vous pouvez ajouter d'autres plateformes
    justEat: 'https://www.just-eat.fr/restaurants-ocrusty-food'
  };

  const handleOrderClick = (platform: string, url: string) => {
    // Tracking analytics (optionnel)
    console.log(`Commande via ${platform} pour: ${itemName || 'Menu général'}`);
    
    // Ouvrir dans un nouvel onglet
    window.open(url, '_blank', 'noopener,noreferrer');
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
            Choisissez votre plateforme de livraison préférée
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleOrderClick('Uber Eats', orderLinks.uberEats)}
            className="w-full bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-3"
          >
            <Truck className="w-6 h-6" />
            <span className="font-semibold">Commander sur Uber Eats</span>
          </button>

          <button
            onClick={() => handleOrderClick('Deliveroo', orderLinks.deliveroo)}
            className="w-full bg-[#00CCBC] text-white p-4 rounded-lg hover:bg-[#00B8A9] transition-colors duration-300 flex items-center justify-center space-x-3"
          >
            <Smartphone className="w-6 h-6" />
            <span className="font-semibold">Commander sur Deliveroo</span>
          </button>

          <button
            onClick={() => handleOrderClick('Just Eat', orderLinks.justEat)}
            className="w-full bg-[#FF8000] text-white p-4 rounded-lg hover:bg-[#E6730D] transition-colors duration-300 flex items-center justify-center space-x-3"
          >
            <Truck className="w-6 h-6" />
            <span className="font-semibold">Commander sur Just Eat</span>
          </button>
        </div>

        <div className="mt-6 p-4 bg-crusty-yellow bg-opacity-20 rounded-lg">
          <p className="text-sm text-crusty-black text-center">
            <strong>Livraison gratuite</strong> pour toute commande supérieure à 25€
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;