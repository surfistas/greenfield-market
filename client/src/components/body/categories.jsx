import React from 'react';
import axios from 'axios';
import Onecategory from './onecategory.jsx'

export default class Categories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category : []
        }
    }

    componentDidMount() {
        this.getCategories();
      }

      getCategories() {
        axios.get("/getCategory").then((result) => {
          this.setState({ category: result.data });
        });

    }

    render() {
        

        return (
            <div>
                {this.state.category.map((cat, index) => {
                    return <Onecategory cat={cat} key={index} index={index} />;
                })
                }
            </div>
        )
    }
}