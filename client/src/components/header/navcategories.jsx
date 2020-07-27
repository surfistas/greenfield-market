import React, { Component } from "react";
import axios from "axios";
import Onenavcategory from "./onenavcategory.jsx";

export default class Navcategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      categorynav: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    axios.get("/getCategory").then((result) => {
      this.setState({ category: result.data });
    });
  }

  render() {
    return (
      <div className="mr-auto navbar-nav">
        {this.state.category.map((cat, index) => {
          return (
            <Onenavcategory
              changeCategory={this.props.changeCategory.bind(this)}
              cat={cat}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}
