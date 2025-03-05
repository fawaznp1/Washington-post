import React from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import trump1 from '../images/business1.png';

function Business() {
  const navigate = useNavigate();

  // Function to handle headline click
  const handleHeadlineClick = (newsId) => {
    navigate(`/business/${newsId}`);
  };
  return (
    <Container className="my-4 mt-5">
      <Row className="align-items-center mt-5">
        {/* Column 1 (80% width on large screens) */}
        <Col xs={12} lg={9} className="d-flex flex-column align-items-start">
          <Row className="mb-3">
            <Col xs={12} md={6} className="d-flex flex-column align-items-center">
              <img
                src={trump1} // Replace with actual image path
                alt="News Image"
                style={{ width: '100%', height: 'auto' }}
                className="rounded"
              />
            </Col>
            <Col xs={12} md={6} className="d-flex ">
              <h3
                onClick={() => handleHeadlineClick(1)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
             Josef Fransis Christy lives in Kochi kakkanad. its a pleasure ...
              </h3>
            </Col>
          </Row>
        </Col>

         {/* Column 2 (20% width on large screens, for other news headlines) */}
         <Col xs={12} lg={3} className="d-flex flex-column align-items-start">
          <h5 className="mb-3">Local News : </h5>
          {/* List of clickable headlines */}
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <li>
              <h6
                onClick={() => handleHeadlineClick(52)}
                className="clickable-headline"
                style={{ cursor: 'pointer', fontSize: '1.2rem' }}
              >
                Headline 2: Donald Trump won the election once mor...
              </h6>
            </li>
            <hr />
            <li>
              <h6
                onClick={() => handleHeadlineClick(53)}
                className="clickable-headline"
                style={{ cursor: 'pointer', fontSize: '1.2rem' }}
              >
                Headline 3: New technology revolutionizes industries...
              </h6>
              <hr />
            </li>
            <li>
              <h6
                onClick={() => handleHeadlineClick(54)}
                className="clickable-headline"
                style={{ cursor: 'pointer', fontSize: '1.2rem' }}
              >
                Headline 4: Local elections results are in...
              </h6>
              <hr />
            </li>
            <li>
              <h6
                onClick={() => handleHeadlineClick(55)}
                className="clickable-headline"
                style={{ cursor: 'pointer', fontSize: '1.2rem' }}
              >
                Headline 5: Local elections results are in...
              </h6>
            </li>
            
          </ul>
        </Col>
        
        
        
        <Col xs={12} lg={9} className="d-flex flex-column align-items-start">
          <Row className="mb-3">
            <Col xs={12} md={6} className="d-flex flex-column align-items-center">
              <img
                src={trump1} // Replace with actual image path
                alt="News Image"
                style={{ width: '100%', height: 'auto' }}
                className="rounded"
              />
            </Col>
            <Col xs={12} md={6} className="d-flex ">
              <h3
                onClick={() => handleHeadlineClick(1)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
Kochi Celebrates Record-Breaking Rainfall in Kakkanad...              </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={9} className="d-flex flex-column align-items-start">
          <Row className="mb-3">
            <Col xs={12} md={6} className="d-flex flex-column align-items-center">
              <img
                src={trump1} // Replace with actual image path
                alt="News Image"
                style={{ width: '100%', height: 'auto' }}
                className="rounded"
              />
            </Col>
            <Col xs={12} md={6} className="d-flex ">
              <h3
                onClick={() => handleHeadlineClick(2)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
Historic Peace Agreement Signed Today, Ending Decades of Conflict and Paving the Way for Future Prosperity...              </h3>
            </Col>
          </Row>
          </Col>
          </Row>
          </Container>
  )
}

export default Business;