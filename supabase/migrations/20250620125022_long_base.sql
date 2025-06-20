/*
  # Création de la table des réservations

  1. Nouvelle Table
    - `reservations`
      - `id` (uuid, clé primaire)
      - `name` (text) - Nom du client
      - `email` (text) - Email du client
      - `phone` (text) - Téléphone du client
      - `reservation_date` (date) - Date de la réservation
      - `reservation_time` (time) - Heure de la réservation
      - `guests` (integer) - Nombre de personnes
      - `special_requests` (text, optionnel) - Demandes spéciales
      - `status` (text) - Statut de la réservation (pending, confirmed, cancelled)
      - `created_at` (timestamp) - Date de création
      - `updated_at` (timestamp) - Date de mise à jour

  2. Sécurité
    - Activer RLS sur la table `reservations`
    - Politique pour permettre l'insertion publique (pour les réservations)
    - Politique pour permettre la lecture aux utilisateurs authentifiés (staff)
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  special_requests text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Activer RLS
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre l'insertion publique (formulaire de réservation)
CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Politique pour permettre la lecture aux utilisateurs authentifiés (staff du restaurant)
CREATE POLICY "Authenticated users can read reservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (true);

-- Politique pour permettre la mise à jour aux utilisateurs authentifiés (staff du restaurant)
CREATE POLICY "Authenticated users can update reservations"
  ON reservations
  FOR UPDATE
  TO authenticated
  USING (true);

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger pour mettre à jour updated_at automatiquement
CREATE TRIGGER update_reservations_updated_at
    BEFORE UPDATE ON reservations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Index pour améliorer les performances des requêtes
CREATE INDEX IF NOT EXISTS idx_reservations_date ON reservations(reservation_date);
CREATE INDEX IF NOT EXISTS idx_reservations_status ON reservations(status);
CREATE INDEX IF NOT EXISTS idx_reservations_created_at ON reservations(created_at);