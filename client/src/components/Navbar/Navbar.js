import React from 'react'
import './navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
// import logo from '../../images/logo.svg'

function Navigation() {
  return (
    <Navbar bg="dark" expand="sm" variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#link">adopt</Nav.Link>
            <Nav.Link href="#link">about</Nav.Link>
            <Nav.Link href="#link">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation