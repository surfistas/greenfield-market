import React from "react";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      totalPrice: 0,
      result: 0,
    };
  }
  // componentDidMount () {this.handleAdding()}

  componentDidMount() {
    this.handleShowing();
  }
  componentDidUpdate() {
    axios.get("/addTocart").then((res) => {
      this.setState({ products: res.data });
    });
  }
  handleShowing() {
    axios
      .get("/addTocart")
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleRemove(event) {
    event.preventDefault();
    axios
      .delete("/cart")
      .then((res) => {
        console.log("deleted");
      })
      .catch((err) => {
        console.error(err);
      });
  }

    render() {
        return (
            <div className="cart">
            <h1 className="cart">Cart</h1>
            <div></div>
            <table className="table table-borderless table-stripped">
              <thead className="thead-light">
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Total</th>
                </tr>
             
              </thead>
              <tbody>
                {this.state.products.map((prod, index) => { 
                    return (
                  <tr >
                  <td>{prod.productName}</td> 
                  <td>{prod.productPrice + ' TND'}</td>
                  <td>{prod.quantity}</td>
                  <td id="price" value={prod.productPrice * prod.quantity}>{prod.productPrice * prod.quantity + ' TND'}</td>
                  <td><Button variant="outline-danger" onClick={this.handleRemove}>Delete</Button></td>
                  </tr>
                  )
                })}        
              </tbody> 
              <tfoot className="tfoot-light">
                <tr>
                  <td></td>
                  <td></td>
                  <td>Delivery</td>
                  <td>7.000 TND</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total to Pay</td>
              <td>{this.state.products.reduce((acc, prod) => 
                acc + (prod.productPrice * prod.quantity) + 7
              ,0)}</td>
                </tr>
                
              </tfoot>
            </table>
            <Button variant="outline-success" className="float-right" style={{marginRight:120 , width: 150}}>
              <Link to="/ThankYou">Click to Confirm</Link>
              </Button>
            </div>
        )
    }   
}
