import React from "react";
import { register } from "./UserFunctions.jsx";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      address: "",
      mobile1: "",
      mobile2: "",
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      mobile1: this.state.mobile1,
      mobile2: this.state.mobile2,
      email: this.state.email,
      password: this.state.password,
    };
    register(user).then((res) => {
      this.props.history.push("/login");
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mw-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb -3 font-weight-normal">PLEASE REGISTER</h1>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter First Name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter Last Name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter Address"
                  value={this.state.address}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-row">
                <div className="col-sm-6">
                  <label htmlFor="mobile1">Mobile 1</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile1"
                    placeholder="Enter Mobile 1"
                    value={this.state.mobile1}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-sm-6 ">
                  <div className="input-group-prepend"></div>
                  <label htmlFor="mobile2">Mobile 2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile2"
                    placeholder="Enter Mobile 2"
                    value={this.state.mobile2}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
