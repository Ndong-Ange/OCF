import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, Check, AlertCircle } from 'lucide-react';

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  reservation_date: string;
  reservation_time: string;
  guests: number;
  special_requests?: string;
}

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    reservation_date: '',
    reservation_time: '',
    guests: 2,
    special_requests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ReservationData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ReservationData> = {};

    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
    if (!formData.reservation_date) newErrors.reservation_date = 'La date est requise';
    if (!formData.reservation_time) newErrors.reservation_time = 'L\'heure est requise';
    if (formData.guests < 1) newErrors.guests = 'Au moins 1 personne';

    // Vérifier que la date n'est pas dans le passé
    const selectedDate = new Date(formData.reservation_date + 'T' + formData.reservation_time);
    const now = new Date();
    if (selectedDate <= now) {
      newErrors.reservation_date = 'La date doit être dans le futur';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Appel à l'API pour sauvegarder en base SQLite
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status: 'pending'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la sauvegarde');
      }

      const result = await response.json();
      console.log('Réservation sauvegardée:', result);
      
      setSubmitStatus('success');
      
      // Réinitialiser le formulaire après succès
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          reservation_date: '',
          reservation_time: '',
          guests: 2,
          special_requests: ''
        });
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ReservationData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Générer les créneaux horaires disponibles
  const timeSlots = [];
  for (let hour = 11; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(timeString);
    }
  }

  // Date minimum (aujourd'hui)
  const today = new Date().toISOString().split('T')[0];

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-2 font-serif">
          Réservation Confirmée !
        </h3>
        <p className="text-crusty-black opacity-80 mb-4">
          Votre réservation a été enregistrée dans notre base de données.
          <br />
          <small className="text-gray-500">Nous vous contacterons pour confirmer.</small>
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>Récapitulatif :</strong><br />
            {formData.name} - {formData.guests} personne{formData.guests > 1 ? 's' : ''}<br />
            Le {new Date(formData.reservation_date).toLocaleDateString('fr-FR')} à {formData.reservation_time}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-crusty-red p-6 rounded-lg shadow-md text-white">
      <h3 className="text-2xl font-bold mb-4 font-serif">Faire une Réservation</h3>
      <p className="mb-6">Réservez votre table pour une expérience culinaire inoubliable</p>
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-800 bg-opacity-50 border border-red-600 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-300" />
          <p className="text-red-200">Une erreur est survenue. Veuillez réessayer.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Nom complet *"
            className={`px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white ${
              errors.name ? 'border-red-400' : ''
            }`}
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Email *"
            className={`px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white ${
              errors.email ? 'border-red-400' : ''
            }`}
          />
        </div>

        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="Téléphone *"
          className={`w-full px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white ${
            errors.phone ? 'border-red-400' : ''
          }`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="date"
            value={formData.reservation_date}
            min={today}
            onChange={(e) => handleInputChange('reservation_date', e.target.value)}
            className={`px-4 py-2 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white ${
              errors.reservation_date ? 'border-red-400' : ''
            }`}
          />

          <select
            value={formData.reservation_time}
            onChange={(e) => handleInputChange('reservation_time', e.target.value)}
            className={`px-4 py-2 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white ${
              errors.reservation_time ? 'border-red-400' : ''
            }`}
          >
            <option value="" className="text-black">Choisir l'heure</option>
            {timeSlots.map(time => (
              <option key={time} value={time} className="text-black">{time}</option>
            ))}
          </select>

          <select
            value={formData.guests}
            onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
            className="px-4 py-2 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white"
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1} className="text-black">
                {i + 1} personne{i > 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <textarea
          value={formData.special_requests}
          onChange={(e) => handleInputChange('special_requests', e.target.value)}
          rows={3}
          placeholder="Demandes spéciales (optionnel)"
          className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 placeholder-white placeholder-opacity-80 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-md font-bold transition-all duration-300 ${
            isSubmitting
              ? 'bg-white bg-opacity-30 cursor-not-allowed'
              : 'bg-white text-crusty-red hover:bg-crusty-yellow hover:text-crusty-black transform hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-crusty-red mr-2"></div>
              Envoi en cours...
            </span>
          ) : (
            'Réserver'
          )}
        </button>
      </form>

      {/* Affichage des erreurs */}
      {Object.keys(errors).length > 0 && (
        <div className="mt-4 p-3 bg-red-800 bg-opacity-50 rounded-lg">
          <p className="text-red-200 text-sm">
            Veuillez corriger les erreurs dans le formulaire
          </p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;