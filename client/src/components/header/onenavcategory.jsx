import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Onenavcategory extends Component {
    constructor(props){
        super(props);
        this.state = {
        category : []
        }
    }
    // onChange( ) {
    //     axios.post("/getProductsWithCategory",{category:this.props.cat.name}).then((result) => {
    //         this.setState({ category: result.data });
    //         console.log('here',result.data)
    //         });
    // }
    

    render() {
        return (
        <li className="nav-item">  
            <Link to={`/categories/${this.props.cat.name}`} className='nav-link' onClick={()=>this.props.onChanges()} >
            {this.props.cat.name} 
            </Link>
        </li>
        );
    }
}
