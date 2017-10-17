// ModelForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ModelField from './ModelField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

import './_model.scss'

class ModelForm extends Component {
  renderFields() {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type="text"
          component={ModelField}/>
      );
    })
  }

  render() {
    return (
      <div id="registerForm" style={{paddingTop: '50px'}}>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          { this.renderFields() }

          <div id="registerField">
            <label>Model Type</label>
            <div>
              <Field name="modelType" component="select">
                <option />
                <option value="HairStroke">Hair Stroke</option>
                <option value="Powdered">Powdered</option>
                <option value="Lips">Lips</option>
                <option value="Eyeliner">Eyeliner</option>
                <option value="Areola">Areola</option>
                <option value="Hairlines">Hairlines</option>
              </Field>
            </div>
          </div>

          <Link to={'/register'} className="btn cancel">
            Cancel
          </Link>
          <button type="submit" className="btn next">
            Next
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  formFields.forEach(({ name }) => {
    if(!values[name]) {
      errors[name] = "You must provide a value"
    }
  })

  return errors;
}

export default reduxForm({
  validate,
  form: 'modelForm',
  destroyOnUnmount: false
})(ModelForm);
