import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import crimeImage1 from '../images/crime1.png'; // Replace with your image path
import crimeImage2 from '../images/crime1.png'; // Replace with your image path
import crimeImage3 from '../images/crime1.png'; // Replace with your image path

function CrimeSection() {
  return (
    <>
    
    <Container className="my-5" style={{ backgroundColor: 'red',position: 'relative', overflow: 'hidden' }}> {/* Set background color for the section */}
      <Row>
        {/* First Column - Blank (40% width) */}
        <Col lg={5} md={5} sm={12} className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
            <h1 className="d-flex align-items-center justify-content-center text-center">Shocking News</h1>
        </Col>
 
        
        {/* Second Column - Carousel (60% width) */}
        <Col lg={7} md={7} sm={12}>
          <a href="/crime/1" className="text-decoration-none"> {/* Wrap the carousel in an anchor tag to make it clickable */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={crimeImage1}
                  alt="Crime Image 1"
                  style={{ objectFit: 'cover', maxHeight: '400px' }}
                />
                <Carousel.Caption>
                  <h3>Crime Headline 1</h3>
                  <p>Description of the crime headline 1.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={crimeImage2}
                  alt="Crime Image 2"
                  style={{ objectFit: 'cover', maxHeight: '400px' }}
                />
                <Carousel.Caption>
                  <h3>Crime Headline 2</h3>
                  <p>Description of the crime headline 2.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={crimeImage3}
                  alt="Crime Image 3"
                  style={{ objectFit: 'cover', maxHeight: '400px' }}
                />
                <Carousel.Caption>
                  <h3>Crime Headline 3</h3>
                  <p>Description of the crime headline 3.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </a>
        </Col>
      </Row>
      
    </Container>
    <section>
    <Row className='mb-2'>
        {/* First Column (70%) */}
        <Col lg={8} md={7} sm={12}>
          <a href="/link1" className="text-decoration-none">
            <Card className=" position-relative ms-3">
              <Card.Img variant="top" src={crimeImage1} alt="Image 1" />
              <Card.Body className="position-absolute bottom-0 w-100 p-3 bg-dark text-white">
                <Card.Title>Caption for Image 1</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Second Column (30%) */}
        <Col lg={4} md={5} sm={12}>
          <a href="/link2" className="text-decoration-none">
            <Card className="">
              <Card.Img variant="top" src={crimeImage1} alt="Image 2" />
              <Card.Body>
                <Card.Title>Caption for Image 2</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

      
      </Row>
    </section>
    </>
  );
}

export default CrimeSection;
