import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImmeubleCard from '../components/immeubles/ImmeubleCard';
// import axios from 'axios'; // Assurez-vous d'avoir installé axios

function Immeubles() {
  const [immeubles, setImmeubles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImmeubles = async () => {
      try {
        // Remplacez cette URL par l'URL de votre API backend
        const response = await axios.get('/api/immeubles');
        setImmeubles(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.error('Erreur lors de la récupération des immeubles', err);
      }
    };

    fetchImmeubles();
  }, []);

  if (loading) return <Container>Chargement...</Container>;
  if (error) return <Container>Erreur de chargement : {error.message}</Container>;

  return (
    <Container className="mt-4">
      <h2>Nos Immeubles</h2>
      <Row>
        {immeubles.map((immeuble) => (
          <Col key={immeuble.id} md={4} className="mb-4">
            <ImmeubleCard immeuble={immeuble} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Immeubles;