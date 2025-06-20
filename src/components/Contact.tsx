import React from 'react';
import { MapPin, Phone, Clock, Mail, Truck } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ReservationForm from './ReservationForm';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="py-16 bg-crusty-black bg-opacity-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crusty-red font-serif">Nous Trouver</h2>
          <p className="text-lg text-crusty-black max-w-2xl mx-auto">
            Situé au cœur d'Agde, nous vous proposons une cuisine rapide et fraîche. 
            Commandez en ligne ou venez nous rendre visite !
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6 text-crusty-red font-serif">Informations de Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Adresse</h4>
                    <p className="text-crusty-black opacity-80">1 Rue des Tamaris</p>
                    <p className="text-crusty-black opacity-80">34300 Agde, France</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Téléphones</h4>
                    <p className="text-crusty-black opacity-80">+33 6 51 67 64 10</p>
                    <p className="text-crusty-black opacity-80">+33 7 72 41 49 91</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Email</h4>
                    <p className="text-crusty-black opacity-80">contact@ocrustyfood-agde.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Horaires</h4>
                    <p className="text-crusty-black opacity-80">Ouvert 7j/7 : 18h00 - 22h00</p>
                    <p className="text-sm text-crusty-red font-semibold">Même les jours fériés !</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Truck className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Livraison</h4>
                    <p className="text-crusty-black opacity-80">Disponible via Uber Eats</p>
                    <p className="text-sm text-green-600">Service de livraison rapide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-crusty-yellow bg-opacity-20 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-crusty-red font-serif">Commande en Ligne</h3>
              <p className="text-crusty-black opacity-80 mb-4">
                Commandez directement depuis chez vous et faites-vous livrer !
              </p>
              <div className="space-y-3">
                <a 
                  href="https://www.ubereats.com/fr/store/ocrusty-food/restaurant-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-black text-white text-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold"
                >
                  🚚 Commander sur Uber Eats
                </a>
                <p className="text-sm text-center text-crusty-black opacity-70">
                  Note : 4.6/5 ⭐ sur Uber Eats
                </p>
              </div>
            </div>
            
            <ReservationForm />
          </div>
          
          <div className="space-y-6">
            <div className="h-64 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/burger/B3.jpg" 
                alt="Ambiance du restaurant Ô Crusty Food Agde" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-crusty-red font-serif">Pourquoi Choisir Ô Crusty Food ?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🍔</div>
                  <p className="text-sm font-semibold text-crusty-black">Burgers Gourmets</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🌮</div>
                  <p className="text-sm font-semibold text-crusty-black">Tacos Savoureux</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🥪</div>
                  <p className="text-sm font-semibold text-crusty-black">Sandwichs Frais</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="text-sm font-semibold text-crusty-black">Service Rapide</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-crusty-red bg-opacity-10 rounded-lg">
                <p className="text-sm text-crusty-black text-center">
                  <strong>Spécialité :</strong> Cuisine rapide et fraîche avec des ingrédients de qualité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;