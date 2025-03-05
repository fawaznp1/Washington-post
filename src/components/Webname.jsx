import React from 'react';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Container className="my-3 mb-5 mt-5 text-center">
      {/* Website Name and Tagline */}
      <h1 style={{ fontFamily: "'Lobster', cursive", fontSize: '2.8rem' }}>
        Josef Post
      </h1>
      <h5 style={{ fontStyle: 'italic' }}>Democracy Lives in Light</h5>
      <hr className='mt-4 bold' />

    </Container>
  );
}

export default Header;
