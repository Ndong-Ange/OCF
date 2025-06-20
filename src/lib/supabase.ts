import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types pour TypeScript
export interface Reservation {
  id?: string;
  name: string;
  email: string;
  phone: string;
  reservation_date: string;
  reservation_time: string;
  guests: number;
  special_requests?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
  updated_at?: string;
}

// Fonctions utilitaires pour les réservations
export const reservationService = {
  // Créer une nouvelle réservation
  async createReservation(reservation: Omit<Reservation, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('reservations')
      .insert([reservation])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Récupérer toutes les réservations (pour le staff)
  async getReservations() {
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .order('reservation_date', { ascending: true })
      .order('reservation_time', { ascending: true });

    if (error) throw error;
    return data;
  },

  // Récupérer les réservations par date
  async getReservationsByDate(date: string) {
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .eq('reservation_date', date)
      .order('reservation_time', { ascending: true });

    if (error) throw error;
    return data;
  },

  // Mettre à jour le statut d'une réservation
  async updateReservationStatus(id: string, status: 'pending' | 'confirmed' | 'cancelled') {
    const { data, error } = await supabase
      .from('reservations')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Supprimer une réservation
  async deleteReservation(id: string) {
    const { error } = await supabase
      .from('reservations')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};