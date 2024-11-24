import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Bienvenue à notre Agence Immobilière</h1>
          <p>Découvrez nos offres d'appartements exclusifs</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Nos Immeubles</Card.Title>
              <Card.Text>
                Découvrez notre sélection d'immeubles de standing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Nos Appartements</Card.Title>
              <Card.Text>
                Trouvez l'appartement de vos rêves.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Prenez rendez-vous pour une visite.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;