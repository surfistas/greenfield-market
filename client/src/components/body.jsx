import React, { Component } from 'react'
import Listproduct from './body/listProduct.jsx'
import Categories from './body/categories'

export default class body extends Component {
    render() {
        return (
            <div id="content">
                {/* <Listproduct/> */}
                <Categories />
            </div>
        )
    }
}
