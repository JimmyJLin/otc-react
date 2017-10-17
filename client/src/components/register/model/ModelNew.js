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
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'ModelForm'
})(ModelNew);
