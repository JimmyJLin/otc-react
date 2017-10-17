import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';

import seminarData from '../../data/seminarData.json';
import './_faq.scss'

class Faq extends Component {
  renderFaq() {
    return seminarData.faq.map(({id, question, answer}) => {
      return (
        <Panel key={id} header={question} eventKey={id}>
          {answer}
        </Panel>
      )
    })
  }
  render() {
    return (
      <div id="faq" className="container-fluid">
        <h2>FAQs</h2>
        <div>
          <Accordion>
            {this.renderFaq()}
          </Accordion>
        </div>
      </div>
    );
  }
}

export default Faq;
