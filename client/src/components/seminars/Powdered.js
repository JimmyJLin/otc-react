import React, { Component } from 'react';
import seminarData from '../../data/seminarData.json';
import SeminarComponent from './SeminarComponent';

class Powdered extends Component {
  render() {
    const values = seminarData.seminars[1]

    return (
      <div className="container-fluid">
        <SeminarComponent values={values}/>
      </div>
    );
  }
}

export default Powdered;
