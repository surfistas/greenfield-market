import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navbart extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Greenfield-market</Navbar.Brand>
          <Nav className="mr-auto">
          <li className="nav-item">
              <Link to="/Cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Navbar bg="dark" variant="dark">
        <Link to="/vegetables" className="nav-link">Vegetables</Link>
        <Link to="/fruits" className="nav-link">Fruits</Link>
        <Link to="/dairy" className="nav-link">Dairy</Link>
        <Link to="/meats" className="nav-link">Meats</Link>
        <Link to="/beverage" className="nav-link">Beverage</Link>
        <Link to="/pastaAndRice" className="nav-link">Pasta And Rice</Link>
        </Navbar>
      </div>
    );
  }
}
