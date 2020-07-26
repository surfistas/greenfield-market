import React from "react";
import { Button} from "react-bootstrap";
import axios from "axios";


 export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          products : [],
          totalPrice : 0,
          result : 0
        }
    }
    // componentDidMount () {this.handleAdding()}
    
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

    calculateTotal () {
      console.log('prod price',this.state.productPrice)
      console.log('result', this.state.result)
      this.setState({result : this.state.result + this.state.productPrice})
    }
   
    render() {
        return (
            <div>
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
                  <td>{prod.productPrice}</td>
                  <td>{prod.quantity}</td>
                  <td>{prod.productPrice * prod.quantity}</td>
                  <td><Button variant="outline-danger" onClick={this.handleRemove}>Delete</Button></td>
                  </tr>
                  )
                })}        
              </tbody> 
              <tfoot className="tfoot-light">
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total to Pay</td>
                  <td>sum</td>
                </tr>
              </tfoot>
            </table>
            {/* <div onChange={this.calculateTotal}></div> */}
            <Button variant="success" >Payment</Button>
            </div>
        )
    }   
}

