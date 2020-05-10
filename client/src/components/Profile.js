import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      room: '',
      errors: {}
    }
  }

  // componentDidMount() {
  //   const token = localStorage.usertoken
  //   const decoded = jwt_decode(token)
  //   this.setState({
  //     first_name: decoded.first_name,
  //     last_name: decoded.last_name,
  //     email: decoded.email
  //   })
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form  onSubmit={this.onSubmit}>
              <h1 className="mt-5 mb-3 font-weight-normal text-center">JOIN</h1>
              <hr/>

              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input
                  type="name"
                  className="form-control"
                  name="username"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                
                />
              </div>
              <div className="form-group">
                <label htmlFor="room">Room</label>
                <input
                  type="name"
                  className="form-control"
                  name="room"
                  placeholder="Room Name"
                  value={this.state.room}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="mb-3 btn btn-lg btn-primary btn-block"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile