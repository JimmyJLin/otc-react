// SurveyField contains logic to render a single
// label & input
import React from 'react';
// import { Row, Col } from 'react-bootstrap';

import './_model.scss'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div id="registerField">
      <label>{label}</label>
      <div>
        <input {...input} style={{ marginBottom: '5px' }}/>
        <div className="red-text" style={{ marginBottom: '20px'}}>
          {touched && error}
        </div>
      </div>
    </div>
  );
};
