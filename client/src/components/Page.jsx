import React,{Component} from 'react';
import Listproduct from './body/listProduct.jsx'
export default class Page extends Component {
    constructor(props) {
        super(props)
        
    }
    render(){
        console.log('page',this.props.match.params.product)
        return(
            <div><Listproduct category={this.props.match.params.product}/> </div>
            
        )
    }
}
