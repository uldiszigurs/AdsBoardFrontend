import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    hashedPassword: ""
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    for (const key in this.state) {
      if (this.state[key].length < 1) {
        console.log("All fields required");
        return false;
      }
    }
    this.props.loginUser(this.state);
  };

  render() {
    const { user } = this.props;

    if (user.token) {
      return <Redirect to='/' />;
    }

    return (
      <form
        onSubmit={this.onSubmit}
        className='registration-form col-6 ml-auto mr-auto'
      >
        <div>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            name='hashedPassword'
            className='form-control'
            onChange={this.onChange}
          />
        </div>
        <button type='submit' className='btn btn-success float-right mt-3'>
          Login
        </button>
      </form>
    );
  }
}

export default Login;
