const redisClient = require('../config/redisClient');
const Immeuble = require('../models/Immeuble');

class ImmeubleService {
  static REDIS_KEY = 'immeubles:';

  // Créer un nouvel immeuble
  static async creerImmeuble(data) {
    const immeuble = new Immeuble(
      data.nom, 
      data.adresse, 
      data.nombreAppartements, 
      data.image
    );
    
    await redisClient.hmset(
      `${this.REDIS_KEY}${immeuble.id}`, 
      immeuble.toJSON()
    );
    
    return immeuble;
  }

  // Récupérer tous les immeubles
  static async getTousImmeubles() {
    const keys = await redisClient.keys(`${this.REDIS_KEY}*`);
    
    const immeubles = await Promise.all(
      keys.map(async (key) => {
        const immeubleData = await redisClient.hgetall(key);
        return Immeuble.fromJSON(immeubleData);
      })
    );
    
    return immeubles;
  }

  // Récupérer un immeuble par son ID
  static async getImmeubleParId(id) {
    const immeubleData = await redisClient.hgetall(`${this.REDIS_KEY}${id}`);
    
    return immeubleData.id ? Immeuble.fromJSON(immeubleData) : null;
  }

  // Mettre à jour un immeuble
  static async modifierImmeuble(id, data) {
    const immeuble = await this.getImmeubleParId(id);
    
    if (!immeuble) {
      throw new Error('Immeuble non trouvé');
    }

    // Mise à jour des propriétés
    Object.keys(data).forEach(key => {
      immeuble[key] = data[key];
    });

    await redisClient.hmset(
      `${this.REDIS_KEY}${id}`, 
      immeuble.toJSON()
    );

    return immeuble;
  }

  // Supprimer un immeuble
  static async supprimerImmeuble(id) {
    await redisClient.del(`${this.REDIS_KEY}${id}`);
    return true;
  }
}

module.exports = ImmeubleService;