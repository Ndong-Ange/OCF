import Database from 'better-sqlite3';
import path from 'path';

// Créer la base de données SQLite
const dbPath = path.join(process.cwd(), 'restaurant.db');
const db = new Database(dbPath);

// Interface pour les réservations
export interface Reservation {
  id?: number;
  name: string;
  email: string;
  phone: string;
  reservation_date: string;
  reservation_time: string;
  guests: number;
  special_requests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}

// Initialiser les tables
export const initDatabase = () => {
  // Table des réservations
  db.exec(`
    CREATE TABLE IF NOT EXISTS reservations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      reservation_date TEXT NOT NULL,
      reservation_time TEXT NOT NULL,
      guests INTEGER NOT NULL,
      special_requests TEXT,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Table des commandes (pour plus tard si besoin)
  db.exec(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_name TEXT,
      customer_email TEXT,
      customer_phone TEXT,
      items TEXT, -- JSON string des articles commandés
      total_amount REAL,
      status TEXT DEFAULT 'pending',
      platform TEXT, -- uber_eats, deliveroo, etc.
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log('✅ Base de données SQLite initialisée');
};

// Fonctions pour les réservations
export const reservationQueries = {
  // Créer une réservation
  create: db.prepare(`
    INSERT INTO reservations (name, email, phone, reservation_date, reservation_time, guests, special_requests, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `),

  // Récupérer toutes les réservations
  getAll: db.prepare('SELECT * FROM reservations ORDER BY created_at DESC'),

  // Récupérer une réservation par ID
  getById: db.prepare('SELECT * FROM reservations WHERE id = ?'),

  // Récupérer les réservations par date
  getByDate: db.prepare('SELECT * FROM reservations WHERE reservation_date = ? ORDER BY reservation_time'),

  // Mettre à jour le statut d'une réservation
  updateStatus: db.prepare('UPDATE reservations SET status = ? WHERE id = ?'),

  // Supprimer une réservation
  delete: db.prepare('DELETE FROM reservations WHERE id = ?'),

  // Compter les réservations par statut
  countByStatus: db.prepare('SELECT status, COUNT(*) as count FROM reservations GROUP BY status')
};

// Fonctions helper
export const reservationService = {
  // Ajouter une nouvelle réservation
  addReservation: (reservation: Omit<Reservation, 'id' | 'created_at'>): number => {
    try {
      const result = reservationQueries.create.run(
        reservation.name,
        reservation.email,
        reservation.phone,
        reservation.reservation_date,
        reservation.reservation_time,
        reservation.guests,
        reservation.special_requests || null,
        reservation.status
      );
      return result.lastInsertRowid as number;
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la réservation:', error);
      throw error;
    }
  },

  // Récupérer toutes les réservations
  getAllReservations: (): Reservation[] => {
    try {
      return reservationQueries.getAll.all() as Reservation[];
    } catch (error) {
      console.error('Erreur lors de la récupération des réservations:', error);
      return [];
    }
  },

  // Récupérer les réservations d'une date
  getReservationsByDate: (date: string): Reservation[] => {
    try {
      return reservationQueries.getByDate.all(date) as Reservation[];
    } catch (error) {
      console.error('Erreur lors de la récupération des réservations par date:', error);
      return [];
    }
  },

  // Mettre à jour le statut
  updateReservationStatus: (id: number, status: Reservation['status']): boolean => {
    try {
      const result = reservationQueries.updateStatus.run(status, id);
      return result.changes > 0;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut:', error);
      return false;
    }
  },

  // Supprimer une réservation
  deleteReservation: (id: number): boolean => {
    try {
      const result = reservationQueries.delete.run(id);
      return result.changes > 0;
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      return false;
    }
  },

  // Statistiques
  getStats: () => {
    try {
      const stats = reservationQueries.countByStatus.all() as Array<{status: string, count: number}>;
      return stats.reduce((acc, curr) => {
        acc[curr.status] = curr.count;
        return acc;
      }, {} as Record<string, number>);
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
      return {};
    }
  }
};

// Initialiser la base de données au démarrage
initDatabase();

export default db;