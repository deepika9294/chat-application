import React, { Component } from 'react'
import { login } from './UserFunctions'
import {Icon } from 'semantic-ui-react'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if(typeof res !== "object"){
        if (res) {
          console.log("in here.....");
          this.props.history.push(`/profile`)
        }
      }  
    })
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <div className="mt-5 card card-body">
            <form  onSubmit={this.onSubmit}>
              <h1 className="mt-5 mb-3 font-weight-normal text-center"><Icon name="sign-in"/>LOGIN</h1>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
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
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="mb-3 btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login