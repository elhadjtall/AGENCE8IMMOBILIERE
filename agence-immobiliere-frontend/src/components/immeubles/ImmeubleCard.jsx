import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ImmeubleCard({ immeuble }) {
  const navigate = useNavigate();

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={immeuble.image || "/api/placeholder/400/300"} 
        alt={immeuble.nom}
      />
      <Card.Body>
        <Card.Title>{immeuble.nom}</Card.Title>
        <Card.Text>
          <strong>Adresse:</strong> {immeuble.adresse}<br />
          <strong>Nombre d'appartements:</strong> {immeuble.nombreAppartements}
        </Card.Text>
        <Button 
          variant="primary" 
          onClick={() => navigate(`/immeubles/${immeuble.id}`)}
        >
          Voir les détails
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ImmeubleCard;