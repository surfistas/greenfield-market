import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Onenavcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
  }

  // componentDidUpdate(prevState) {
  //   if (this.state.category !== prevState.category) {
  //       console.log("Updated")
  //     this.onChange(this.state.category);
  //   }
  // }
  onChange() {
    axios
      .post("/getProductsWithCategory", { category: this.props.cat.name })
      .then((result) => {
        this.setState({ category: result.data });
        console.log(this.state.category);
      });
  }

  render() {
    return (
      <li className="nav-item">
        <Link
          to={`/categories/${this.props.cat.name}`}
          className="nav-link"
          onClick={this.props.changeCategory.bind(this)}
        >
          {this.props.cat.name}
        </Link>
      </li>
    );
  }
}
