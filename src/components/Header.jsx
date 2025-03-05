import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; // Import Button component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


function BasicExample() {
  const [currentDate, setCurrentDate] = useState('');
  const [theme, setTheme] = useState('light'); // State for light/dark theme

  // Function to get the current date
  useEffect(() => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString(undefined, options));
    
    // Initialize theme on page load (check if a theme is already set in localStorage)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('light'); // Default to light theme
    }
  }, []);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    
    
    // Update the body class to change the theme
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);

    // Save the selected theme in localStorage to persist it across page reloads
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Navbar expand="lg" className={`sticky-top ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <Container>
        <Navbar.Brand href="/"   className={theme === 'dark' ? 'text-light' : 'text-dark'}>
          Josef Post
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link className={theme === 'dark' ? 'text-light' : 'text-dark'} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={theme === 'dark' ? 'text-light' : 'text-dark'} href="/crime">
              Crime
            </Nav.Link>
            <Nav.Link className={theme === 'dark' ? 'text-light' : 'text-dark'} href="/tech">
              Tech
            </Nav.Link>
            <Nav.Link className={theme === 'dark' ? 'text-light' : 'text-dark'} href="/sports">
              Sports
            </Nav.Link>
            <Nav.Link className={theme === 'dark' ? 'text-light' : 'text-dark'} href="/business">
              Business
            </Nav.Link>
            <Nav.Link className={theme === 'dark' ? 'text-light' : 'text-dark'} href="/fashion">
              Fashion
            </Nav.Link>
          </Nav>

          {/* Current Date on the Right Side */}
          <span className={`me-4 ${theme === 'dark' ? 'text-light' : 'text-dark'}`} style={{ fontSize: '0.9rem' }}>
            {currentDate}
          </span>

          {/* Toggle Button for Dark/Light Mode */}
          <Button
      variant={theme === 'light' ? 'outline-dark' : 'outline-light'}
      onClick={toggleTheme}
      className="ms-3"
    >
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
    </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
