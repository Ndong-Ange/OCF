import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-crusty-red font-serif">Notre Histoire</h2>
            <p className="text-lg text-crusty-black mb-4">
              Situé au cœur d'Agde, Ô Crusty Food est votre destination de choix pour une cuisine rapide et fraîche. 
              Nous nous spécialisons dans les burgers gourmets, tacos savoureux et sandwichs croustillants, 
              préparés avec passion et des ingrédients de qualité.
            </p>
            <p className="text-lg text-crusty-black mb-6">
              Ouvert 7 jours sur 7 de 18h à 22h, même les jours fériés, nous sommes là pour satisfaire vos envies 
              culinaires. Notre engagement : vous offrir des plats frais, savoureux et préparés à la commande, 
              que ce soit sur place ou en livraison via Uber Eats.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-crusty-black bg-opacity-5 p-4 rounded-lg">
                <h3 className="font-bold text-crusty-red mb-2">🍔 Burgers Gourmets</h3>
                <p className="text-crusty-black opacity-80">Viande fraîche du boucher et ingrédients sélectionnés</p>
              </div>
              <div className="bg-crusty-black bg-opacity-5 p-4 rounded-lg">
                <h3 className="font-bold text-crusty-red mb-2">🌮 Tacos Authentiques</h3>
                <p className="text-crusty-black opacity-80">Recettes traditionnelles et saveurs authentiques</p>
              </div>
              <div className="bg-crusty-black bg-opacity-5 p-4 rounded-lg">
                <h3 className="font-bold text-crusty-red mb-2">🥪 Sandwichs Frais</h3>
                <p className="text-crusty-black opacity-80">Pain croustillant et garnitures généreuses</p>
              </div>
              <div className="bg-crusty-black bg-opacity-5 p-4 rounded-lg">
                <h3 className="font-bold text-crusty-red mb-2">🚚 Livraison Rapide</h3>
                <p className="text-crusty-black opacity-80">Service de livraison via Uber Eats - Note 4.6/5</p>
              </div>
            </div>

            <div className="bg-crusty-yellow bg-opacity-20 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-crusty-red mb-2">📍 Situé à Agde</h3>
              <p className="text-crusty-black opacity-80">
                <strong>Adresse :</strong> 1 Rue des Tamaris, 34300 Agde<br />
                <strong>Horaires :</strong> 7j/7 de 18h à 22h (même jours fériés)<br />
                <strong>Contact :</strong> +33 6 51 67 64 10 / +33 7 72 41 49 91
              </p>
            </div>
            
            <button className="bg-crusty-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
              Commander Maintenant
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/burger/B2.jpg" 
                alt="Nos burgers signature avec viande fraîche du boucher" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden mt-8">
              <img 
                src="/images/tacos/TA1.jpg" 
                alt="Nos tacos authentiques et savoureux" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/fritures - tenders-nuggets/F1.jpg" 
                alt="Nos spécialités croustillantes et tenders" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden mt-8">
              <img 
                src="/images/menu/M1.jpg" 
                alt="Nos menus complets et généreux" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section supplémentaire avec les points forts */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-crusty-red font-serif">Pourquoi Nous Choisir ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-crusty-red">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="font-bold text-crusty-black mb-2">Note 4.6/5</h4>
              <p className="text-crusty-black opacity-80">Excellente réputation sur Uber Eats</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-crusty-yellow">
              <div className="text-4xl mb-4">🕐</div>
              <h4 className="font-bold text-crusty-black mb-2">Ouvert 7j/7</h4>
              <p className="text-crusty-black opacity-80">Même les jours fériés, de 18h à 22h</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-crusty-red">
              <div className="text-4xl mb-4">🥩</div>
              <h4 className="font-bold text-crusty-black mb-2">Viande du Boucher</h4>
              <p className="text-crusty-black opacity-80">Qualité et fraîcheur garanties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;