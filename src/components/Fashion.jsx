import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import fashionImage from '../images/actor2.jpg'; // Replace with your image path
import actor3 from '../images/actor4.webp';

function FashionSection() {
  return (
    <Container className="my-5" style={{ minHeight: '80vh' }}>
      <Row className="d-flex align-items-center" style={{ height: '100%' }}>
        {/* One Column (80% of screen height) */}
        <Col lg={12} md={12} sm={12} className="mb-4">
          <a href="/fashion/1" className="text-decoration-none" style={{ height: '60%' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={actor3} alt="Fashion Image"  style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>Fashion Headline: Latest Trends for Fall</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      <Row className="d-flex align-items-center" style={{ height: '100%' }}>
        {/* One Column (80% of screen height) */}
        <Col lg={12} md={12} sm={12} className="mb-4">
          <a href="/fashion/1" className="text-decoration-none" style={{ height: '60%' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={actor3} alt="Fashion Image"  style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>Fashion Headline: Latest Trends for Fall</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      <Row className="d-flex align-items-center" style={{ height: '100%' }}>
        {/* One Column (80% of screen height) */}
        <Col lg={12} md={12} sm={12} className="mb-4">
          <a href="/fashion/1" className="text-decoration-none" style={{ height: '60%' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={actor3} alt="Fashion Image"  style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>Fashion Headline: Latest Trends for Fall</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      <Row className="d-flex align-items-center" style={{ height: '100%' }}>
        {/* One Column (80% of screen height) */}
        <Col lg={12} md={12} sm={12} className="mb-4">
          <a href="/fashion/1" className="text-decoration-none" style={{ height: '60%' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={actor3} alt="Fashion Image"  style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>Fashion Headline: Latest Trends for Fall</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      <Row className="d-flex align-items-center" style={{ height: '100%' }}>
        {/* One Column (80% of screen height) */}
        <Col lg={12} md={12} sm={12} className="mb-4">
          <a href="/fashion/1" className="text-decoration-none" style={{ height: '60%' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={actor3} alt="Fashion Image"  style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>Fashion Headline: Latest Trends for Fall</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default FashionSection;
