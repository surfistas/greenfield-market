import React from "react";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";




 export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          products : [],
          totalPrice : []
        }
    }    
    componentDidMount() {
      this.handleShowing()
    }
    
    handleShowing () {
      console.log('cart1',this.props)
      axios.get("/addTocart")
        .then((res) => {
          console.log('data',res.data.tot)
          this.setState({products : res.data})
          console.log(this.state.products)
        })
        .catch((err) => {
          console.error(err)
        })
    } 

    handleRemove (event) { 
      event.preventDefault()
            axios.delete("/cart")
            .then((res) => {
                console.log(res.data)
                console.log('deleted')
            })
            .catch((err) => {
                console.error(err)
            })
        }

    // calculateTotal () {
    //   var price = document.getElementById('price').getAttribute("value")
    //   console.log('price',price)
    //   eval(price)
    // }

   
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
                  <td></td>
                </tr>
                
              </tfoot>
            </table>
            {/* <div onChange={this.calculateTotal}></div> */}
            <Button variant="outline-success" className="float-right" style={{marginRight:120 , width: 150}}>
              <Link to="/ThankYou">Click to Confirm</Link>
              </Button>
            </div>
        )
    }   
}

