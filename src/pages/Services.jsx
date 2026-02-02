import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">Our Services</h2>

      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow text-center h-100">
            <Card.Body>
              <h1>🌐</h1>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>React-based modern websites</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center h-100">
            <Card.Body>
              <h1>🎨</h1>
              <Card.Title>UI / UX Design</Card.Title>
              <Card.Text>Clean and user-friendly designs</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center h-100">
            <Card.Body>
              <h1>⚡</h1>
              <Card.Title>React Apps</Card.Title>
              <Card.Text>Fast & scalable applications</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
