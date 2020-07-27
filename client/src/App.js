import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import NavBar from "./components/header/navBar.jsx";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx";
import Page from "./components/Page.jsx";
import Cart from "./components/cart.jsx";
class App extends React.Component {
  // create the category state
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: !!localStorage.usertoken,
      category: "",
    };
    this.logState = this.logState.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  // create a function that takes the name of the category as argument and sets the state of the category to that argument
  changeCategory(e) {
    let category = e.target.href.slice(33);
    this.setState({ category: category });
  }

  // import Switch from "react-bootstrap/esm/Switch";

  logState() {
    localStorage.loggedIn = true;
  }
  logOut() {
    localStorage.loggedIn = false;

  }
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            {/* Pass the category and the function as props */}
            {/* On click in your navbar, invoke the prop function with the element being clicked, being the argument */}
            <NavBar
              category={this.state.category}
              changeCategory={this.changeCategory.bind(this)}
            />
            <Route exact path="/" component={Body} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route
                exact
                path="/login"
                render={(props) => (
                  <Login {...props} logState={this.logState} />
                )}
              />
              {/* pass the category as props here */}
              {/* <Route exact path="/profile" component={Profile} /> */}
              <Route
                exact
                path="/categories/:product"
                component={() => <Page category={this.state.category} />}
              />
              <Route exact path="/Cart" component={Cart} />
            </div>
            <Footer />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
