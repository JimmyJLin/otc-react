import React, { Component } from 'react';
import seminarData from '../../data/seminarData.json';
import SeminarComponent from './SeminarComponent';

class Hairstrokes extends Component {

  render() {
    const values = seminarData.seminars[0]
    return (
      <div className="container-fluid">
        <SeminarComponent values={values}/>
      </div>
    );
  }
}

export default Hairstrokes;
