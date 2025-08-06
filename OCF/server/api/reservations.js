import { reservationService } from '../lib/database.js';

// API Routes pour les réservations
export const reservationAPI = {
  // POST /api/reservations - Créer une réservation
  create: async (reservationData) => {
    try {
      const id = reservationService.addReservation(reservationData);
      return {
        success: true,
        id,
        message: 'Réservation créée avec succès'
      };
    } catch (error) {
      console.error('Erreur API - Création réservation:', error);
      throw new Error('Impossible de créer la réservation');
    }
  },

  // GET /api/reservations - Récupérer toutes les réservations
  getAll: async () => {
    try {
      const reservations = reservationService.getAllReservations();
      return {
        success: true,
        data: reservations,
        count: reservations.length
      };
    } catch (error) {
      console.error('Erreur API - Récupération réservations:', error);
      throw new Error('Impossible de récupérer les réservations');
    }
  },

  // GET /api/reservations/date/:date - Récupérer les réservations par date
  getByDate: async (date) => {
    try {
      const reservations = reservationService.getReservationsByDate(date);
      return {
        success: true,
        data: reservations,
        count: reservations.length
      };
    } catch (error) {
      console.error('Erreur API - Récupération réservations par date:', error);
      throw new Error('Impossible de récupérer les réservations pour cette date');
    }
  },

  // PUT /api/reservations/:id/status - Mettre à jour le statut d'une réservation
  updateStatus: async (id, status) => {
    try {
      const success = reservationService.updateReservationStatus(id, status);
      if (!success) {
        throw new Error('Réservation non trouvée');
      }
      return {
        success: true,
        message: 'Statut mis à jour avec succès'
      };
    } catch (error) {
      console.error('Erreur API - Mise à jour statut:', error);
      throw error;
    }
  },

  // DELETE /api/reservations/:id - Supprimer une réservation
  delete: async (id) => {
    try {
      const success = reservationService.deleteReservation(id);
      if (!success) {
        throw new Error('Réservation non trouvée');
      }
      return {
        success: true,
        message: 'Réservation supprimée avec succès'
      };
    } catch (error) {
      console.error('Erreur API - Suppression réservation:', error);
      throw error;
    }
  },

  // GET /api/reservations/stats - Statistiques des réservations
  getStats: async () => {
    try {
      const stats = reservationService.getStats();
      return {
        success: true,
        data: stats
      };
    } catch (error) {
      console.error('Erreur API - Statistiques:', error);
      throw new Error('Impossible de récupérer les statistiques');
    }
  }
};