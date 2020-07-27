import React from 'react';
import { Link } from "react-router-dom";


export default class ThankYouPage extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return ( 
        <div class="jumbotron text-center">
            <h1 class="display-3">Thank You!</h1>
            <h2>Your order has been confirmed.</h2>
            <p class="lead"><strong>Please check your email</strong> for further instructions on when you will receive the delivery.</p>
            <p class="lead">
                The payment will be done when delivery received.
            </p>
            <Link to="/"> Home Page </Link>
        </div>
        )
    }
} 
