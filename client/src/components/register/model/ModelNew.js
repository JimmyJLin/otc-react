// ModelNew shows ModelForm & SurveyReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ModelForm from './ModelForm';
import ModelFormReview from './ModelFormReview';

import './_model.scss'

class ModelNew extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { new: true };
  // }

  // initialize initial states
  state = { showFormReview: false };

  renderContent(){
    if(this.state.showFormReview) {
      return <ModelFormReview
        onCancel={() => this.setState({ showFormReview: false })}/>;
    }

    return (
      <ModelForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    )
  }

  render() {
    return (
      <div id="form_container" className="container">
        <h2>Model Registration Form</h2>
        <h5>If you are interested in becoming one of our model for various Microblading Techniques, please fill out the form below.</h5>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'modelForm'
})(ModelNew);
