import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Toolbox MEARN frontend</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );

export default Header;