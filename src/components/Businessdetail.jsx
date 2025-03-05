import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import trump1 from '../images/trump1.jpg'; // Example image path

// Sample news data
const newsData = {
  1: {
    title: 'Kochi Celebrates Record-Breaking Rainfall in Kakkanad',
    content:
      'The city of Kochi has experienced a record-breaking monsoon season this year, with Kakkanad witnessing the highest rainfall in decades...',
    image: trump1,
  },
  2: {
    title: 'Historic Win for Indian Cricket Team in World Cup',
    content:
      'In a thrilling final match, the Indian cricket team emerged victorious in the World Cup, securing a historic win against a formidable opponent...',
    image: trump1,
  },
  // More data...
};

const NewsDetail = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const article = newsData[id]; // Fetch the article by ID

  if (!article) {
    return <p>Article not found.</p>; // If the article does not exist, show a message
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </Col>
        <Col md={4}>
          <Image src={article.image} alt={article.title} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsDetail;
