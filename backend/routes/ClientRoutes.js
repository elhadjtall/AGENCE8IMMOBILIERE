const express = require('express');
const router = express.Router();

// Ajoutez vos routes pour les clients ici
router.get('/', (req, res) => {
  res.json({ message: 'Route des clients' });
});

module.exports = router;