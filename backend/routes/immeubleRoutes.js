const express = require('express');
const router = express.Router();
const immeubleController = require('../controllers/immeubleController');

router.post('/', immeubleController.creerImmeuble);
router.get('/', immeubleController.getTousImmeubles);
router.get('/:id', immeubleController.getImmeubleParId);
router.put('/:id', immeubleController.modifierImmeuble);
router.delete('/:id', immeubleController.supprimerImmeuble);

module.exports = router;