import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, menuItems, MenuItem as MenuItemType } from '../data/menuData';
import OrderModal from './OrderModal';

// Nouveau composant pour afficher une carte de menu unifiée
const MenuItemCard = ({ item, onOrderClick }: { item: MenuItemType, onOrderClick: (name?: string) => void }) => {
  return (
    <div className="rounded-lg overflow-hidden transition-colors duration-200 flex flex-col group hover:shadow-lg hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-2xl font-bold text-crusty-black group-hover:text-crusty-red transition-colors duration-200">{item.name}</h4>
          {/* Affiche le prix seulement s'il existe (pour les articles non-personnalisables) */}
          {item.price && (
            <span className="text-xl font-semibold text-crusty-red group-hover:text-crusty-red transition-colors duration-200">{item.price}</span>
          )}
        </div>
        <p className="text-white opacity-70 mb-4 flex-grow group-hover:text-crusty-red transition-colors duration-200">{item.description}</p>
        
        {/* Affiche les tailles si elles existent */}
        {item.sizes && (
          <div className="mb-4">
            <h5 className="font-bold text-white opacity-90 mb-2 group-hover:text-crusty-red transition-colors duration-200">Choisissez votre taille :</h5>
            <div className="flex flex-wrap gap-2">
              {item.sizes.map(size => (
                <span key={size.name} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm group-hover:text-crusty-red transition-colors duration-200">
                  {size.name}: {size.price}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Affiche les options de personnalisation si elles existent */}
        {item.options && (
          <div className="mb-4 space-y-2">
            {item.options.map(option => (
              <div key={option.title}>
                <h5 className="font-bold text-crusty-black group-hover:text-crusty-red transition-colors duration-200">{option.title}</h5>
                <p className="text-sm text-crusty-black opacity-70 group-hover:text-crusty-red transition-colors duration-200">{option.items.join(', ')}</p>
              </div>
            ))}
          </div>
        )}

        
      </div>
    </div>
  );
};


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [orderModal, setOrderModal] = useState<{ isOpen: boolean; itemName?: string }>({
    isOpen: false,
    itemName: undefined
  });
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const popularItems = menuItems.filter(item => item.popular);

  const handleOrderClick = (itemName?: string) => {
    setOrderModal({ isOpen: true, itemName });
  };

  const closeOrderModal = () => {
    setOrderModal({ isOpen: false, itemName: undefined });
  };

  return (
    <section id="menu" className="py-16 bg-crusty-black bg-opacity-5 px-4 md:px-6 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crusty-red font-serif">Notre Menu</h2>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Découvrez notre sélection de délices croustillants préparés avec passion
        </p>
      </div>

      

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {/* Barre de catégories */}
        <div className="md:col-span-1">
          <div className="flex flex-col space-y-2 py-2 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`font-medium transition-all duration-300 whitespace-nowrap text-left
                  ${activeCategory === category.id
                    ? 'text-crusty-red font-bold'
                    : 'text-crusty-black hover:text-crusty-red'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des articles filtrés par catégorie */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:col-span-3"
          >
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} onOrderClick={handleOrderClick} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <OrderModal 
        isOpen={orderModal.isOpen}
        onClose={closeOrderModal}
        itemName={orderModal.itemName}
      />
    </section>
  );
};

export default Menu;