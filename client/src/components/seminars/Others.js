import React, { Component } from 'react';
import seminarData from '../../data/seminarData.json';
import SeminarComponent from './SeminarComponent';

class Others extends Component {
  renderSeminarComponent() {
    return seminarData.others.map((values) => {
      return <SeminarComponent key={values.title} values={values}/>
    })
  }
  render() {
    return (
      <div className="container-fluid">
        {this.renderSeminarComponent()}
      </div>
    );
  }
}

export default Others;
