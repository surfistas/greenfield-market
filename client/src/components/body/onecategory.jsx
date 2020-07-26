import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Onecategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
  }
  onChange() {
    axios
      .post("/getProductsWithCategory", { category: this.props.cat.name })
      .then((result) => {
        this.setState({ category: result.data });
      });
  }

  render() {
    return (
      <div>
        <Link
          to={`/categories/${this.props.cat.name}`}
          className="nav-link"
          onClick={this.onChange.bind(this)}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{this.props.cat.name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}
