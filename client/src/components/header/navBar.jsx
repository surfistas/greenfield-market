import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navcategories from "../header/navcategories";
export default class Navbart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      changed: false,
    };
  }
  componentDidUpdate() {
    if (this.state.loggedIn == "false") {
      this.setState({ changed: true });
      this.state.loggedIn = true;
    }
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">Greenfield-market</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            {localStorage.loggedIn == "false" ? (
              <div>
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
              </div>
            ) : (
              <h5>Welcome to our Market</h5>
            )}

            {localStorage.loggedIn == "true" ? (
              <li className="nav-item">
                <Link
                  onClick={() => {
                    localStorage.setItem("usertoken", "");
                    localStorage.setItem("loggedIn", "false");
                    this.setState({ loggedIn: false });
                  }}
                  to="/"
                  className="nav-link"
                >
                  Logout
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <Link to="/Cart" className="nav-link">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
            </li>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />

            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Navbar bg="dark" variant="dark" className="categories-nav">
          <Navcategories
            changeCategory={this.props.changeCategory.bind(this)}
          />
          {/* <Link to="/vegetables" className="nav-link" onClick={this.onChange.bind(this)}>Vegetables</Link>
        <Link to="/fruits" className="nav-link">Fruits</Link>
        <Link to="/dairy" className="nav-link">Dairy</Link>
        <Link to="/meats" className="nav-link">Meats</Link>
        <Link to="/beverage" className="nav-link">Beverage</Link>
        <Link to="/pastaAndRice" className="nav-link">Pasta And Rice</Link> */}
        </Navbar>
      </div>
    );
  }
}
