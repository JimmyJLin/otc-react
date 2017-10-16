import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import RegisterField from './RegisterField';
import validateEmails from '../utils/validateEmails';
import * as actions from '../../actions';

import './_register.scss'

const FIELDS = [
  {label: 'First Name', name: 'f_name', type: 'text'},
  {label: 'Last Name', name: 'l_name', type: 'text'},
  {label: 'Email', name: 'emails', type: 'email'},
  {label: 'Phone Number', name: 'phone',  type: 'number'}
]

class RegisterForm extends Component {

  modelSubmit(values, history) {
    this.props.submitModelRegistration(values, history)
  }

  renderFields() {
    return FIELDS.map(({ label, name, type}) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          component={RegisterField}
        />
      )
    })
  }
  render() {
    return (
      <div id="registerForm" className="center-block">
        <form onSubmit={this.props.handleSubmit((values, history) => this.modelSubmit(values, history))}>
          { this.renderFields() }
          <div id="registerField">
            <label>Model Type</label>
            <div>
              <Field name="modleType" component="select">
                <option />
                <option value="HairStroke">Hair Stroke</option>
                <option value="Powdered">Powdered</option>
                <option value="Lips">Lips</option>
                <option value="Lips">Lips</option>
                <option value="Eyeliner">Eyeliner</option>
                <option value="Areola">Areola</option>
                <option value="Hairlines">Hairlines</option>
              </Field>
            </div>
          </div>
          <button
            type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  FIELDS.forEach(({ name }) => {
    if(!values[name]) {
      errors[name] = "This field cannot be left blank, please provide a valid value"
    }
  })

  return errors;
}

function mapStateToProps(state){
  return { formValues: state.form.modelForm}
}

RegisterForm = reduxForm({
  validate,
  form: 'modelForm'
})(RegisterForm)
RegisterForm = connect(mapStateToProps, actions)(withRouter(RegisterForm))
export default RegisterForm
