import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import trump1 from '../images/trump1.jpg';

function HomeSection() {
  const navigate = useNavigate();

  // Function to handle headline click
  const handleHeadlineClick = (newsId) => {
    navigate(`/news/${newsId}`);
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
             Josef jeorge Christy lives in Kochi kakkanad. its a pleasure ...
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
                onClick={() => handleHeadlineClick(3)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
Tech Giants Announce Major Merger Deal, Uniting Two Industry Leaders in a Bold Move to Dominate Global Markets...              </h3>
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
                onClick={() => handleHeadlineClick(4)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
New Study Reveals Surprising Health Benefits of Dark Chocolate, Offering Sweet News for Health Enthusiasts Everywhere...              </h3>
            </Col>
          </Row>
        </Col> <Col xs={12} lg={9} className="d-flex flex-column align-items-start">
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
                onClick={() => handleHeadlineClick(5)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
Global Markets React to Unexpected Oil Price Surge, Causing Ripples Across Economies and Reshaping Investment Strategies...              </h3>
            </Col>
          </Row>
        </Col> <Col xs={12} lg={9} className="d-flex flex-column align-items-start">
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
                onClick={() => handleHeadlineClick(6)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
Breakthrough in Alzheimer’s Research Brings New Hope, Marking a Milestone in the Fight Against Neurodegenerative Diseases...              </h3>
            </Col>
          </Row>
        </Col> <Col xs={12} lg={9} className="d-flex flex-column align-items-start">
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
                onClick={() => handleHeadlineClick(7)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
SpaceX Launches Largest Satellite Mission Yet, Taking a Giant Leap Toward Expanding Global Internet Connectivity...              </h3>
            </Col>
          </Row>
        </Col> <Col xs={12} lg={9} className="d-flex flex-column align-items-start">
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
                onClick={() => handleHeadlineClick(8)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
Major Earthquake Strikes Japan, Triggering Tsunami Warning and Sending Shockwaves Across the Pacific Region...             </h3>
            </Col>
          </Row>
        </Col> <Col xs={12} lg={9} className="d-flex flex-column align-items-start">
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
                onClick={() => handleHeadlineClick(9)}
                className="clickable-headline"
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.5rem' }}
              >
New Species of Bird Discovered in Amazon Rainforest, Adding a Fascinating Chapter to the Story of Biodiversity...              </h3>
            </Col>
          </Row>
        </Col>



       
      </Row>

      <hr />
<p>Latest from the post</p>
      <div className="container my-4">
  <div className="row">
    {/* Column 1 */}
    <div className="col-12 col-md-3 mb-4 d-flex">
      <div className="d-flex">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image path
          alt="News Image"
          style={{ width: '30%', height: 'auto' }}
          className="rounded"
        />
        <div className="ms-3" style={{ width: '70%' }}>
          <h5 className="clickable-headline" style={{ cursor: 'pointer' }}>
            Headline 1: Josef Fransis Christy lives in Kochi
          </h5>
          <small>10 minutes ago</small>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className="col-12 col-md-3 mb-4 d-flex">
      <div className="d-flex">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image path
          alt="News Image"
          style={{ width: '30%', height: 'auto' }}
          className="rounded"
        />
        <div className="ms-3" style={{ width: '70%' }}>
          <h5 className="clickable-headline" style={{ cursor: 'pointer' }}>
            Headline 2: Donald Trump won the election once more
          </h5>
          <small>20 minutes ago</small>
        </div>
      </div>
    </div>

    {/* Column 3 */}
    <div className="col-12 col-md-3 mb-4 d-flex">
      <div className="d-flex">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image path
          alt="News Image"
          style={{ width: '30%', height: 'auto' }}
          className="rounded"
        />
        <div className="ms-3" style={{ width: '70%' }}>
          <h5 className="clickable-headline" style={{ cursor: 'pointer' }}>
            Headline 3: New technology revolutionizes industries
          </h5>
          <small>30 minutes ago</small>
        </div>
      </div>
    </div>

    {/* Column 4 */}
    <div className="col-12 col-md-3 mb-4 d-flex">
      <div className="d-flex">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image path
          alt="News Image"
          style={{ width: '30%', height: 'auto' }}
          className="rounded"
        />
        <div className="ms-3" style={{ width: '70%' }}>
          <h5 className="clickable-headline" style={{ cursor: 'pointer' }}>
            Headline 4: Local elections results are in
          </h5>
          <small>1 hour ago</small>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container my-4">
  <div className="row">
    {/* Column 1 */}
    <div className="col-12 col-md-3 mb-4 d-flex">
      <div className="d-flex">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image path
          alt="News Image"
          style={{ width: '30%', height: 'auto' }}
          className="rounded"
        />
        <div className="ms-3" style={{ width: '70%' }}>
          <h5 className="clickable-headline" style={{ cursor: 'pointer' }}>
            Headline 1: Josef Fransis Christy lives in Kochi
          </h5>
          <small>10 minutes ago</small>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className="col-12 col-md-3 mb-4 d-flex">
      <div className="d-flex">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image path
          alt="News Image"
          style={{ width: '30%', height: 'auto' }}
          className="rounded"
        />
        <div className="ms-3" style={{ width: '70%' }}>
          <h5 className="clickable-headline" style={{ cursor: 'pointer' }}>
            Headline 2: Donald Trump won the election once more
          </h5>
          <small>20 minutes ago</small>
        </div>
      </div>
    </div>

    {/* Column 3 */}
    <div className="col-12 col-md-3 mb-4 d-flex">
      <div className="d-flex">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image path
          alt="News Image"
          style={{ width: '30%', height: 'auto' }}
          className="rounded"
        />
        <div className="ms-3" style={{ width: '70%' }}>
          <h5 className="clickable-headline" style={{ cursor: 'pointer' }}>
            Headline 3: New technology revolutionizes industries
          </h5>
          <small>30 minutes ago</small>
        </div>
      </div>
    </div>

    {/* Column 4 */}
    <div className="col-12 col-md-3 mb-4 d-flex">
      <div className="d-flex">
        <img
          src="https://via.placeholder.com/150" // Replace with actual image path
          alt="News Image"
          style={{ width: '30%', height: 'auto' }}
          className="rounded"
        />
        <div className="ms-3" style={{ width: '70%' }}>
          <h5 className="clickable-headline" style={{ cursor: 'pointer' }}>
            Headline 4: Local elections results are in
          </h5>
          <small>1 hour ago</small>
        </div>
      </div>
    </div>
  </div>
</div>


<hr />
<p>Form the past month:</p>
<div className="container my-4">
  <div className="row">
    {/* Column 1 */}
    <div className="col-md-3 mb-4">
      <img src={trump1} alt="Image 1" className="img-fluid" />
      <p className="text-center">Caption for Image 1</p>
    </div>

    {/* Column 2 */}
    <div className="col-md-3 mb-4">
      <img src={trump1} alt="Image 2" className="img-fluid" />
      <p className="text-center">Caption for Image 2</p>
    </div>

    {/* Column 3 */}
    <div className="col-md-3 mb-4">
      <img src={trump1} alt="Image 3" className="img-fluid" />
      <p className="text-center">Caption for Image 3</p>
    </div>

    {/* Column 4 */}
    <div className="col-md-3 mb-4">
      <img src={trump1} alt="Image 4" className="img-fluid" />
      <p className="text-center">Caption for Image 4</p>
    </div>
  </div>
</div>




    </Container>
  );
}

export default HomeSection;
