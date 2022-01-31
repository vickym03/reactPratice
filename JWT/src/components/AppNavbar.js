import { Button } from "bootstrap";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import authToken from "../authToken/authToken";

function AppNavbar(props) {
  let tokenCredentials = authToken();

  let logout=()=>{
    localStorage.clear()
    props.history.push("/")
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          {tokenCredentials && tokenCredentials.token && tokenCredentials.role==="admin" &&
          <Nav>
            <Link to="/products">Products</Link>
            <Link to="#link">Add Products</Link>
          </Nav> }

            {!tokenCredentials ? (
              <Nav className="me-auto">
                <Link to="/login">Login</Link>
                <Link to="#link">Register</Link>
              </Nav>
            ) : (
              <button onClick={logout}>Logout</button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(AppNavbar) ;
