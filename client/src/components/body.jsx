import React, { Component } from 'react'
import Listproduct from './body/listProduct.jsx'
import Categories from './body/categories'
import Navcategories from './header/navcategories.jsx'

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
