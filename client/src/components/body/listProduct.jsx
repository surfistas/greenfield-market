import React from 'react';
import axios from 'axios';
import Oneproduct from './oneproduct.jsx'

export default class cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        this.getData();
      }

    getData() {
        axios.get("/products").then((result) => {
          this.setState({ product: result });
        });

    }

    render() {
        

        return (
            <div>
                {this.state.product.map((prod, index) => {
                    return <Oneproduct prod={prod} key={index} index={index} />;
                })
            }
            </div>

        )
    }
}

