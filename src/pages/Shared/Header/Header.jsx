import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Container>
      <div className='text-center mt-4'>
        <img src={logo} alt='' />
        <p className='text-secoundary'>
          <small>Jaournalism is a fear or favior</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className='d-flex gap-4'>
        <Button variant='danger'>Latest</Button>
        <Marquee speed={30}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='#pricing'>About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>Profile</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                <Button variant='secondary'>LogIn</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
