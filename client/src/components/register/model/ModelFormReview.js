import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';

import './_model.scss'

const ModelFormReview = ({ onCancel, formValues, submitModel, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div id="field_list" key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div id="modelReview">
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="btn cancel" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitModel(formValues, history)}
        className="btn next"
      >
        Send Survey
      </button>
    </div>
  )
}

function mapStateToProps(state){
  return { formValues: state.form.modelForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ModelFormReview));
