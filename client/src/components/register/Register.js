import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

import './_register.scss'

class Register extends Component {
  render() {
    return (
      <div id="register" className="container-fluid">
        <h2>Model Registration Form</h2>
        <RegisterForm />
      </div>
    );
  }
}

export default Register;
