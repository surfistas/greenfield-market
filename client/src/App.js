import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import NavBar from "./components/header/navBar.jsx";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx";
import Page from "./components/Page.jsx";

class App extends React.Component {
  // create the category state
  constructor(props) {
    super(props);
    this.state = { category: "" };
  }
  // create a function that takes the name of the category as argument and sets the state of the category to that argument
  changeCategory(e) {
    let category = e.target.href.slice(33);
    this.setState({ category: category });
  }
  render() {
    return (
      <Router>
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
            <Route exact path="/login" component={Login} />
            {/* pass the category as props here */}
            <Route
              exact
              path="/categories/:product"
              component={() => <Page category={this.state.category} />}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
