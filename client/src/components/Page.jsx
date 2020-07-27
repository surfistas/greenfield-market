import React, { Component } from "react";
import Listproduct from "./body/listProduct.jsx";
export default class Page extends Component {
  constructor(props) {
    super(props);
    this.props.category = window.location.pathname.slice(12);
  }
  render() {
    return (
      <div>
        <Listproduct category={this.props.category} />
      </div>
    );
  }
}
