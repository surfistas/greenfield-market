// import React from "react";
// import ReactDOM from "react-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar, Nav, FormControl, Form, Button, Table} from "react-bootstrap";
// import axios from "axios";


//  export default class Cart extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             productUrl : String ,
//             productName: String, 
//             productPrice: Number, 
//             amount : Number,
//             total : Number
//         }
//     }
//     componentDidMount () {this.handleAdding()}
    
//     handleAdding () {
//       axios.get("/cart")
//         .then((res) => {
//           console.log(res.data)
//         })
//         .catch((err) => {
//           console.error(err)
//         })
//     }

//     handleRemove () {
//         axios.delete("/cart")
//         .then((res) => {
//             console.log(res.data)
//             console.log('deleted')
//         })
//         .catch((err) => {
//             console.error(err)
//         })
//     }


//     render() {
//         return (
//             <div>
//             <Navbar bg="dark" variant="dark">
//                 <Navbar.Brand href="Greenfield-Market">Greenfield Market</Navbar.Brand>
                
//                 <Nav className="mr-auto">
//                     <Nav.Link href="Cart">Cart</Nav.Link>
//                 </Nav> 
//                  <Form inline>
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-info" >Search</Button>
//                 </Form>           
//             </Navbar>
//             <Navbar bg="dark" variant="dark">                
//                 <Nav className="mr-auto">
//                     <Nav.Link href="home">Home</Nav.Link>
//                     <Nav.Link href="Categories">Categories</Nav.Link>
//                 </Nav>
                
//             </Navbar>
//             <h1 className="cart">Cart</h1>
//             <div></div>
//             <table className="table table-borderless table-stripped">
//               <thead className="thead-light">
//                 <tr>
//                   <th>Product</th>
//                   <th>Product Name</th>
//                   <th>Price</th>
//                   <th>Amount</th>
//                   <th>Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                 <td><img src={this.state.productUrl} ></img></td>
//                 <td>Product-Name</td>
//                 <td>Price</td>
//                 <td>Amount</td>
//                 <td>Total</td>
//                 <td><Button variant="outline-danger">Delete</Button></td>
//                 </tr>
//               </tbody>
//             </table>
//             <Button variant="success">Success</Button>{' '}
//             </div>
//         )
//     }  
// }

