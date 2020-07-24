import React, {Component} from 'react'
import axios from 'axios'
import Onenavcategory from './onenavcategory.jsx'

export default class Navcategories extends Component {
    constructor(props){
        super(props);
        this.state = {
            category : [],
            categorynav:[]
        }
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.getCategories();
      }
    componentDidUpdate(prevProps,prevState){
        console.log(prevState)
        if(prevState.category != this.state.category){
           return this.onChange()
        }
    }
    getCategories() {
        axios.get("/getCategory").then((result) => {
          this.setState({ category: result.data });
        });

    }
    onChange( ) {
        axios.post("/getProductsWithCategory",{category:this.props.category}).then((result) => {
            console.log('here',result.data)
            this.setState({ categorynav: result.data });
            });
    }

    render() {
        return (
            <div className="mr-auto navbar-nav" >
                {this.state.category.map((cat, index) => {
                    return <Onenavcategory cat={cat} key={index} index={index}  onChanges={this.onChange}/>;
                })}
            </div>
        )
    }
}

