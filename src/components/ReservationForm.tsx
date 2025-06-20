import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, Check, AlertCircle } from 'lucide-react';

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

interface ReservationFormProps {
  onSubmit?: (data: ReservationData) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
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
    if (!formData.date) newErrors.date = 'La date est requise';
    if (!formData.time) newErrors.time = 'L\'heure est requise';
    if (formData.guests < 1) newErrors.guests = 'Au moins 1 personne';

    // Vérifier que la date n'est pas dans le passé
    const selectedDate = new Date(formData.date + 'T' + formData.time);
    const now = new Date();
    if (selectedDate <= now) {
      newErrors.date = 'La date doit être dans le futur';
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
      // Simuler l'envoi à une API/base de données
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Ici vous intégreriez avec Supabase ou votre backend
      const reservationData = {
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'pending'
      };

      console.log('Réservation soumise:', reservationData);
      
      // Appeler la fonction de callback si fournie
      if (onSubmit) {
        onSubmit(formData);
      }

      setSubmitStatus('success');
      
      // Réinitialiser le formulaire après succès
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 2,
          specialRequests: ''
        });
        setSubmitStatus('idle');
      }, 3000);

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
          Votre réservation a été enregistrée avec succès. Nous vous confirmerons par email dans les plus brefs délais.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-700">
            <strong>Récapitulatif :</strong><br />
            {formData.name} - {formData.guests} personne{formData.guests > 1 ? 's' : ''}<br />
            Le {new Date(formData.date).toLocaleDateString('fr-FR')} à {formData.time}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-crusty-red font-serif">Faire une Réservation</h3>
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-700">Une erreur est survenue. Veuillez réessayer.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-crusty-black mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Nom complet *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-crusty-red ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Votre nom complet"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-crusty-black mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-crusty-red ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="votre@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-crusty-black mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Téléphone *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-crusty-red ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="01 23 45 67 89"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-crusty-black mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Date *
            </label>
            <input
              type="date"
              value={formData.date}
              min={today}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-crusty-red ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-crusty-black mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Heure *
            </label>
            <select
              value={formData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-crusty-red ${
                errors.time ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choisir l'heure</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-crusty-black mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Personnes *
            </label>
            <select
              value={formData.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crusty-red"
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} personne{i > 0 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-crusty-black mb-2">
            Demandes spéciales (optionnel)
          </label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) => handleInputChange('specialRequests', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crusty-red"
            placeholder="Allergies, préférences de table, occasion spéciale..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-md font-bold transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-crusty-red hover:bg-red-700 transform hover:scale-105'
          } text-white`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Envoi en cours...
            </span>
          ) : (
            'Confirmer la Réservation'
          )}
        </button>
      </form>

      <div className="mt-4 p-4 bg-crusty-yellow bg-opacity-20 rounded-lg">
        <p className="text-sm text-crusty-black text-center">
          <strong>Note :</strong> Nous vous confirmerons votre réservation par email dans les 2 heures.
          Pour les réservations de plus de 8 personnes, merci de nous appeler directement.
        </p>
      </div>
    </div>
  );
};

export default ReservationForm;