const { v4: uuidv4 } = require('uuid');

class Immeuble {
  constructor(nom, adresse, nombreAppartements, image = null) {
    this.id = uuidv4();
    this.nom = nom;
    this.adresse = adresse;
    this.nombreAppartements = nombreAppartements;
    this.image = image;
    this.dateCreation = new Date().toISOString();
  }

  // Conversion en objet JSON pour stockage Redis
  toJSON() {
    return {
      id: this.id,
      nom: this.nom,
      adresse: this.adresse,
      nombreAppartements: this.nombreAppartements,
      image: this.image,
      dateCreation: this.dateCreation
    };
  }

  // Création à partir d'un objet JSON
  static fromJSON(json) {
    const immeuble = new Immeuble(
      json.nom, 
      json.adresse, 
      json.nombreAppartements, 
      json.image
    );
    immeuble.id = json.id;
    immeuble.dateCreation = json.dateCreation;
    return immeuble;
  }
}

module.exports = Immeuble;