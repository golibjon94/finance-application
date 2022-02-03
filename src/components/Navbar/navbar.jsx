import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar style={{ backgroundColor: "rgba(15, 4, 44,0.9)" }} expand="lg">
      <Container fluid className="mx-5">
        <Navbar.Brand style={{ color: "white" }}>
          <Link style={{textDecoration:"none",color:"white"}} to="/finance-application">Bosh Sahifa</Link>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="mx-5">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              className="w-100 mx-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
