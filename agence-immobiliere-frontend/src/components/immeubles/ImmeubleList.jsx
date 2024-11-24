import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import ImmeubleCard from './ImmeubleCard';
import axios from 'axios';

function ImmeubleList() {
  const [immeubles, setImmeubles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchImmeubles();
  }, []);

  const fetchImmeubles = async () => {
    try {
      const response = await axios.get('/api/immeubles');
      setImmeubles(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des immeubles:', error);
      setLoading(false);
    }
  };

  const filteredImmeubles = immeubles.filter(immeuble =>
    immeuble.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    immeuble.adresse.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Chargement...</div>;

  return (
    <Container>
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Rechercher un immeuble..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredImmeubles.map(immeuble => (
          <Col key={immeuble.id}>
            <ImmeubleCard immeuble={immeuble} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ImmeubleList;