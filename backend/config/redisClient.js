const Redis = require('ioredis');

// Configuration de la connexion Redis
const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

// Gestion des erreurs de connexion
redisClient.on('error', (err) => {
  console.error('Erreur de connexion Redis:', err);
});

module.exports = redisClient;