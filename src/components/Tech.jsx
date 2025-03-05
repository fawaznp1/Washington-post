import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import techImage from '../images/tech1.jpeg';
import techImage2 from '../images/tech2.jpg';


function TechSection() {
  return (
    <Container className="my-5">
      <Row>
        {/* First Column (50% width) */}
        <Col lg={6} md={6} sm={12} className="mb-4">
          <a href="/tech/1" className="text-decoration-none">
            <Card>
              <Card.Img variant="top" src={techImage} alt="Tech Image" />
              <Card.Body>
                <Card.Title>Tech Headline: Latest Innovations in AI</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Second Column (50% width) */}
        <Col lg={6} md={6} sm={12} className="mb-4">
          <a href="/tech/2" className="text-decoration-none">
            <Card>
              <Card.Img variant="top" src={techImage} alt="Tech Image" />
              <Card.Body>
                <Card.Title>Tech Headline: AI Driving the Future of Tech</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 15 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      <Row>
        {/* First Column (50% width) */}
        <Col lg={6} md={6} sm={12} className="mb-4">
          <a href="/tech/1" className="text-decoration-none">
            <Card>
              <Card.Img variant="top" src={techImage2} alt="Tech Image" />
              <Card.Body>
                <Card.Title>Tech Headline: Latest Innovations in AI</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Second Column (50% width) */}
        <Col lg={6} md={6} sm={12} className="mb-4">
          <a href="/tech/2" className="text-decoration-none">
            <Card>
              <Card.Img variant="top" src={techImage2} alt="Tech Image" />
              <Card.Body>
                <Card.Title>Tech Headline: AI Driving the Future of Tech</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 15 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default TechSection;
