import React from 'react'
import Navbart from './header/navBar.jsx'

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <header>
                <Navbart logOut={this.props.logOut} />
            </header>
        )
    }
}