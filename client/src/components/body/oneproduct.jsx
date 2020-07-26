import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Login from "../Login";
import axios from "axios"

export default class Oneproduct extends Component {
    constructor(props){
      super(props);
      this.state = {
        loggedIn : this.props.loggedIn
      }
     
    }
  
  handleProduct () {
    axios.post("/cart" , {productName:this.props.prod.name, productPrice: this.props.prod.price, quantity : this.props.prod.quantity } )
    .then((result) => {
      console.log(result)
    })
      .catch(err => {
        console.error(err)
    })
  }

  render() {
    console.log(this.props)
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
            <Button variant="primary" onClick={this.handleProduct.bind(this)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    );
  } 
}
 