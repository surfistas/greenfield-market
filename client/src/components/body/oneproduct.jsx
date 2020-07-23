import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class Oneproduct extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.prod.photoUrl}
          ></Card.Img>
          <Card.Body>
            <Card.Title>{this.props.prod.name}</Card.Title>
            <Card.Text>{this.props.prod.quantity}</Card.Text>
            <Card.Text>{this.props.prod.price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
