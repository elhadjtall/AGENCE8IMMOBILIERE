require('dotenv').config();
const express = require('express');
const cors = require('cors');
const redisClient = require('./config/redisClient');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Importation correcte des routes
const immeubleRoutes = require('./routes/immeubleRoutes');
const appartementRoutes = require('./routes/appartementRoutes');
const clientRoutes = require('./routes/clientRoutes');

// Utilisation correcte des routes
app.use('/api/immeubles', immeubleRoutes);
app.use('/api/appartements', appartementRoutes);
app.use('/api/clients', clientRoutes);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Une erreur est survenue', 
    error: process.env.NODE_ENV === 'production' ? {} : err.stack 
  });
});

// Démarrage du serveur
app.listen(PORT, async () => {
  try {
    await redisClient.ping();
    console.log('Connexion Redis établie');
    console.log(`Serveur démarré sur le port ${PORT}`);
  } catch (error) {
    console.error('Impossible de se connecter à Redis:', error);
  }
});