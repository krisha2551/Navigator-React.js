import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            We are a passionate web development team building
            modern, responsive, and scalable applications.
          </p>
          <p>
            Our focus is on performance, clean UI, and great user experience.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h4>🚀 Mission</h4>
            <p>Deliver quality digital solutions</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h4>👁 Vision</h4>
            <p>Become a trusted tech partner</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h4>💡 Values</h4>
            <p>Quality, trust, and innovation</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
