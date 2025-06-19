import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

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
            Nous serons ravis de vous accueillir ! Visitez-nous ou contactez-nous pour faire une réservation.
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
                    <p className="text-crusty-black opacity-80">123 Rue Croustillante, Foodville, 75000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Téléphone</h4>
                    <p className="text-crusty-black opacity-80">01 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Email</h4>
                    <p className="text-crusty-black opacity-80">contact@ocrustyfood.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Horaires</h4>
                    <p className="text-crusty-black opacity-80">Lundi - Vendredi: 11h - 22h</p>
                    <p className="text-crusty-black opacity-80">Samedi - Dimanche: 10h - 23h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-crusty-red p-6 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-bold mb-4 font-serif">Faire une Réservation</h3>
              <p className="mb-4">Réservez votre table pour une expérience culinaire inoubliable</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Nom" 
                    className="px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Date" 
                    className="px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                  <input 
                    type="text" 
                    placeholder="Heure" 
                    className="px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Nombre de personnes" 
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button 
                  type="submit" 
                  className="w-full bg-white text-crusty-red font-bold py-3 px-6 rounded-md hover:bg-crusty-yellow transition-colors duration-300"
                >
                  Réserver
                </button>
              </form>
            </div>
          </div>
          
          <div className="h-96 md:h-full rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-full">
              <img 
                src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Emplacement du restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact