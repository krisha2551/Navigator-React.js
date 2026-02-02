import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="mt-5 mb-5">
      <h2>Contact Us</h2>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>

        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
