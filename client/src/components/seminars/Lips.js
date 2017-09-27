import React, { Component } from 'react';
import seminarData from '../../data/seminarData.json';
import SeminarComponent from './SeminarComponent';

class Lips extends Component {
  render() {
    const values = seminarData.seminars[2]

    return (
      <div className="container-fluid">
        <SeminarComponent values={values}/>
      </div>
    );
  }
}

export default Lips;
