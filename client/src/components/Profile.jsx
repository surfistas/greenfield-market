import React from 'react';
import jwt_decode from 'jwt-decode'


class Profile extends React.Component {
    constructor() {
        super()
        this.state =  {
            first_name:'',
            last_name: '',
            address:'',
            mobile1:'',
            mobile2:'',
            email:'',

        }
    }
    componentDidMount() {
        const token = localStorage.usertoken;
        const decode = jwt_decode(token)
        this.setState({
            first_name: decode.first_name,
            last_name: decode.last_name,
            address: decode.address,
            mobile1: decode.mobile1,
            mobile2: decode.mobile2,
            email: decode.email,
        })
    }
    render(){
        return (
            <div className= "container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{this.state.address}</td>
                            </tr>
                            <tr>
                                <td>Mobile 1</td>
                                <td>{this.state.mobile1}</td>
                            </tr>
                            <tr>
                                <td>Mobile 2</td>
                                <td>{this.state.mobile2}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default Profile;