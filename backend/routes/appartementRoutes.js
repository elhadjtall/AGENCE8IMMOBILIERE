const express = require('express');
const router = express.Router();

// Ajoutez vos routes pour les appartements ici
router.get('/', (req, res) => {
  res.json({ message: 'Route des appartements' });
});

module.exports = router;