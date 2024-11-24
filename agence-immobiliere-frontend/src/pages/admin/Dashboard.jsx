import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../../components/layout/Sidebar';

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <h1>Tableau de bord</h1>
          <Row>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Total Immeubles</Card.Title>
                  <Card.Text className="h2">10</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Total Appartements</Card.Title>
                  <Card.Text className="h2">50</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Ventes en cours</Card.Title>
                  <Card.Text className="h2">5</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;