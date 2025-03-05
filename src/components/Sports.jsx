

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import saliba1 from '../images/William-Saliba-b10961d.jpg';

function SportsSection() {
  return (
    <Container className="my-5">
      <Row>
        {/* First Column (40% wide) */}
        <Col lg={5} md={6} sm={12} className="mb-4">
          <Card>
            <a href="/sports/1" className="no-underline">
              <Card.Img variant="top" src={saliba1} alt="Sports Image 1" />
              <Card.Body>
                <Card.Title>Headline 1: Amazing Game Highlight</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>

        {/* Second Column (20% wide) */}
        <Col lg={2} md={6} sm={12} className="mb-4">
          <Card>
            <a href="/sports/2" className="no-underline">
              <Card.Img variant="top" src={saliba1} alt="Sports Image 2" />
              <Card.Body>
                <Card.Title>Headline 2: A Thrilling Victory for Arsenal</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 15 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>

        {/* Third Column (20% wide) */}
        <Col lg={2} md={6} sm={12} className="mb-4">
          <Card>
            <a href="/sports/3" className="no-underline">
              <Card.Img variant="top" src={saliba1} alt="Sports Image 3" />
              <Card.Body>
                <Card.Title>Headline 3: Incredible Athlete Performance</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 20 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>

        {/* Fourth Column (20% wide) */}
        <Col lg={2} md={6} sm={12} className="mb-4">
          <Card>
            <a href="/sports/4" className="no-underline">
              <Card.Img variant="top" src={saliba1} alt="Sports Image 4" />
              <Card.Body>
                <Card.Title>Headline 4: Record-Breaking Achievement</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 25 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        
      </Row>
      <Row>
        {/* First Column (40% wide) */}
        <Col lg={5} md={6} sm={12} className="mb-4">
          <Card>
            <a href="/sports/1" className="no-underline">
              <Card.Img variant="top" src={saliba1} alt="Sports Image 1" />
              <Card.Body>
                <Card.Title>Headline 1: Amazing Game Highlight</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 10 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>

        {/* Second Column (20% wide) */}
        <Col lg={2} md={6} sm={12} className="mb-4">
          <Card>
            <a href="/sports/2" className="no-underline">
              <Card.Img variant="top" src={saliba1} alt="Sports Image 2" />
              <Card.Body>
                <Card.Title>Headline 2: A Thrilling Victory for Arsenal</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 15 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>

        {/* Third Column (20% wide) */}
        <Col lg={2} md={6} sm={12} className="mb-4">
          <Card>
            <a href="/sports/3" className="no-underline">
              <Card.Img variant="top" src={saliba1} alt="Sports Image 3" />
              <Card.Body>
                <Card.Title>Headline 3: Incredible Athlete Performance</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 20 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>

        {/* Fourth Column (20% wide) */}
        <Col lg={2} md={6} sm={12} className="mb-4">
          <Card>
            <a href="/sports/4" className="no-underline">
              <Card.Img variant="top" src={saliba1} alt="Sports Image 4" />
              <Card.Body>
                <Card.Title>Headline 4: Record-Breaking Achievement</Card.Title>
                <Card.Text>
                  <small className="text-muted">Updated 25 minutes ago</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        
      </Row>

      
    </Container>
  );
}

export default SportsSection;

