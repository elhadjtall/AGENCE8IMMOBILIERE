import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Agence Immobilière</h5>
            <p>Votre partenaire de confiance dans l'immobilier</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: contact@agence.com</p>
            <p>Tél: +212 555-555-555</p>
          </Col>
          <Col md={4}>
            <h5>Horaires</h5>
            <p>Lun - Ven: 9h - 18h</p>
            <p>Sam: 9h - 13h</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; 2024 Agence Immobilière. Tous droits réservés.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
