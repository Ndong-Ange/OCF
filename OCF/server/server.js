import express from 'express';
import cors from 'cors';
import { reservationAPI } from './api/reservations.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes API pour les réservations
app.post('/api/reservations', async (req, res) => {
  try {
    const result = await reservationAPI.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/api/reservations', async (req, res) => {
  try {
    const result = await reservationAPI.getAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/api/reservations/date/:date', async (req, res) => {
  try {
    const result = await reservationAPI.getByDate(req.params.date);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.put('/api/reservations/:id/status', async (req, res) => {
  try {
    const result = await reservationAPI.updateStatus(
      parseInt(req.params.id),
      req.body.status
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.delete('/api/reservations/:id', async (req, res) => {
  try {
    const result = await reservationAPI.delete(parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/api/reservations/stats', async (req, res) => {
  try {
    const result = await reservationAPI.getStats();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur API démarré sur le port ${PORT}`);
  console.log(`📊 Base de données SQLite prête`);
});