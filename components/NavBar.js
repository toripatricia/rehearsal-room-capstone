/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Navbar, Container, Image, Nav, Button,
} from 'react-bootstrap';
import Link from 'next/link';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image
              src="https://lh3.googleusercontent.com/pw/AJFCJaWd95GEOO1f9oCXJT3EZ7o0UGVBid8uwbVvxvgytZnIkmESpyuGnMGhfijjLsKHkyLUnSGHmVdZ5bElQE_kXarx-f7oqKYuJyxP5gIYOsX6LVWRlz-Sd4gYN7hoQDxY-ZJ4NSlF62BoCboHmJepTVwx=w499-h499-s-no?authuser=0"
              width={40}
              height={40}
              alt="RR logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/adminForm">
              <Nav.Link>Admin Sign Up</Nav.Link>
            </Link>
            <Link passHref href="/SelectAccountType">
              <Nav.Link>Select account</Nav.Link>
            </Link>
            <Link passHref href="/createSchedule">
              <Nav.Link>Create Daily Schedule</Nav.Link>
            </Link>
            <Link passHref href="/schedule">
              <Nav.Link>View Daily Schedule</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
