const ImmeubleService = require('../services/immeubleService');

exports.creerImmeuble = async (req, res) => {
  try {
    const immeuble = await ImmeubleService.creerImmeuble(req.body);
    res.status(201).json(immeuble);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTousImmeubles = async (req, res) => {
  try {
    const immeubles = await ImmeubleService.getTousImmeubles();
    res.json(immeubles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getImmeubleParId = async (req, res) => {
  try {
    const immeuble = await ImmeubleService.getImmeubleParId(req.params.id);
    
    if (!immeuble) {
      return res.status(404).json({ message: 'Immeuble non trouvé' });
    }
    
    res.json(immeuble);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.modifierImmeuble = async (req, res) => {
  try {
    const immeuble = await ImmeubleService.modifierImmeuble(
      req.params.id, 
      req.body
    );
    res.json(immeuble);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.supprimerImmeuble = async (req, res) => {
  try {
    await ImmeubleService.supprimerImmeuble(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};